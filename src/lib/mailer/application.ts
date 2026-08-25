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
  resume: File;
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
  const subject = `Job Application - ${data.role} - ${data.name}`;

  const buffer = Buffer.from(await data.resume.arrayBuffer());

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO || "info@acsius.com",

    replyTo: data.email,

    subject,

    text: `
New Job Application

Position:
${data.role}

Full Name:
${data.name}

Email:
${data.email}

Phone:
${data.phone || "-"}

Designation:
${data.designation || "-"}

Current CTC:
${data.currentCtc || "-"}

Expected CTC:
${data.expectedCtc || "-"}

Notice Period:
${data.noticePeriod || "-"}

Resume:
${data.resume.name}
`.trim(),

    html: `
      <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto">

        <h2>New Job Application</h2>

        <table
          cellpadding="8"
          cellspacing="0"
          style="border-collapse:collapse;width:100%"
        >
          <tr>
            <td><strong>Position</strong></td>
            <td>${escapeHtml(data.role)}</td>
          </tr>

          <tr>
            <td><strong>Full Name</strong></td>
            <td>${escapeHtml(data.name)}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${escapeHtml(data.email)}</td>
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

          <tr>
            <td><strong>Resume</strong></td>
            <td>${escapeHtml(data.resume.name)}</td>
          </tr>
        </table>

        <p style="margin-top:25px;color:#666">
          Resume is attached to this email.
        </p>

      </div>
    `.trim(),

    attachments: [
      {
        filename: data.resume.name,
        content: buffer,
        contentType:
          data.resume.type || "application/octet-stream",
      },
    ],
  });
}

export const submitApplicationServer = createServerFn({
  method: "POST",
})
  .validator((data) => {
    if (!(data instanceof FormData)) {
      throw new Error("Invalid form data.");
    }

    return data;
  })
  .handler(async ({ data }) => {
    const role = String(data.get("role") ?? "").trim();
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const designation = String(data.get("designation") ?? "").trim();
    const currentCtc = String(data.get("currentCtc") ?? "").trim();
    const expectedCtc = String(data.get("expectedCtc") ?? "").trim();
    const noticePeriod = String(data.get("noticePeriod") ?? "").trim();

    const resume = data.get("resume");

    if (!role || !name || !email || !resume) {
      throw new Error(
        "Role, name, email and resume are required.",
      );
    }

    if (!(resume instanceof File)) {
      throw new Error("Invalid resume file.");
    }

    if (resume.size === 0) {
      throw new Error("Please upload a resume.");
    }

    // 5 MB limit
    const MAX_FILE_SIZE = 5 * 1024 * 1024;

    if (resume.size > MAX_FILE_SIZE) {
      throw new Error("Resume must be smaller than 5 MB.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      throw new Error("Please provide a valid email address.");
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