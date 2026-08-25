import { createServerFn } from "@tanstack/react-start";
import { transporter } from "./mail";

export type ApplicationEmailData = {
    role: string;
    name: string;
    email: string;
    phone: string;
    designation: string;
    currentCtc: string;
    expectedCtc: string;
    noticePeriod: string;
    resume?: {
        filename: string;
        content: Buffer;
        contentType?: string;
    } | undefined;
};

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function sendApplicationEmail(
    data: ApplicationEmailData,
) {
    const subject = `Application form - ${data.name || "New application"}`;

    await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO || "info@acsius.com",
        replyTo: data.email,
        subject,
        text: `
Full name: ${data.name || "-"}

Email: ${data.email || "-"}

Phone: ${data.phone || "-"}

Designation: ${data.designation || "-"}

Current CTC: ${data.currentCtc || "-"}

Expected CTC: ${data.expectedCtc || "-"}

Notice Period: ${data.noticePeriod || "-"}
`.trim(),


        html: `
      <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto">

        <h2>New Application</h2>

        <table
          cellpadding="8"
          cellspacing="0"
          style="border-collapse:collapse;width:100%"
        >
          <tr>
            <td><strong>Role</strong></td>
            <td>${escapeHtml(data.role || "-")}</td>
          </tr>

          <tr>
            <td><strong>Full name</strong></td>
            <td>${escapeHtml(data.name || "-")}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${escapeHtml(data.email || "-")}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${escapeHtml(data.phone || "-")}</td>
          </tr>

          <tr>
            <td><strong>Designation</strong></td>
            <td>${escapeHtml(data.designation || "-")}</td>
          </tr>

          <tr>
            <td><strong>Current CTC</strong></td>
            <td>${escapeHtml(data.currentCtc || "-")}</td>
          </tr>

          <tr>
            <td><strong>Expected CTC</strong></td>
            <td>${escapeHtml(data.expectedCtc || "-")}</td>
          </tr>

          <tr>
            <td><strong>Notice Period</strong></td>
            <td>${escapeHtml(data.noticePeriod || "-")}</td>
          </tr>
        </table>

        ${data.resume
                ? `
              <hr>
              <p>
                <strong>Attachment:</strong>
                ${escapeHtml(data.resume.filename)}
              </p>
            `
                : ""
            }

      </div>
    `.trim(),

        attachments: data.resume
            ? [
                {
                    filename: data.resume.filename,
                    content: data.resume.content,
                    ...(data.resume.contentType
                        ? { contentType: data.resume.contentType }
                        : {}),
                },
            ]
            : [],
    });
}

export const submitApplicationServer = createServerFn({
    method: "POST",
}).handler(async ({ data }) => {
    const formData = data as unknown as FormData;

    const role = String(formData.get("role") ?? "").trim();
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const designation = String(formData.get("designation") ?? "").trim();
    const currentCtc = String(formData.get("currentCtc") ?? "").trim();
    const expectedCtc = String(formData.get("expectedCtc") ?? "").trim();
    const noticePeriod = String(formData.get("noticePeriod") ?? "").trim();

    const file = formData.get("resume");

    if (!name || !email || !designation || !currentCtc || !expectedCtc) {
        throw new Error(
            "Name, email, Designation, Current CTC and Expected CTC are required.",
        );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        throw new Error(
            "Please provide a valid email address.",
        );
    }

    let resume:
        | {
            filename: string;
            content: Buffer;
            contentType?: string;
        }
        | undefined;

    if (file instanceof File) {
        const MAX_FILE_SIZE = 10 * 1024 * 1024;

        if (file.size > MAX_FILE_SIZE) {
            throw new Error(
                "The attachment must be smaller than 10 MB.",
            );
        }

        const allowedTypes = [
            "application/pdf",
            "image/jpeg",
            "image/png",
            "image/webp",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (
            file.type &&
            !allowedTypes.includes(file.type)
        ) {
            throw new Error(
                "This file type is not allowed.",
            );
        }

        const arrayBuffer = await file.arrayBuffer();

        resume = {
            filename: file.name,
            content: Buffer.from(arrayBuffer),
            ...(file.type ? { contentType: file.type } : {}),
        };
    }

    await sendApplicationEmail({
        role,
        name,
        email,
        phone,
        designation,
        currentCtc,
        expectedCtc,
        noticePeriod,
        resume,
    });

    return {
        success: true,
    };
});