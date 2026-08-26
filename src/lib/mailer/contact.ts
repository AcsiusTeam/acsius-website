import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { transporter } from "./mail";

export type ContactEmailData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  brief: string;
  city: string;
  country: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(data: ContactEmailData) {
  const subject = `Contact form - ${data.name || "New enquiry"}`;

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.CONTACT_MAIL_TO || "info@acsius.com",

    replyTo: data.email,

    subject,

    text: `
Full name: ${data.name || "-"}

Work email: ${data.email || "-"}

Phone: ${data.phone || "-"}

Service needed: ${data.service || "-"}

Project brief:
${data.brief || "-"}

— Visitor location (auto-detected) —
City: ${data.city || "Unknown"}
Country: ${data.country || "Unknown"}
`.trim(),

    html: `
      <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto">
        <h2>New Website Enquiry</h2>

        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
          <tr>
            <td><strong>Full name</strong></td>
            <td>${escapeHtml(data.name || "-")}</td>
          </tr>

          <tr>
            <td><strong>Work email</strong></td>
            <td>${escapeHtml(data.email || "-")}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${escapeHtml(data.phone || "-")}</td>
          </tr>

          <tr>
            <td><strong>Service needed</strong></td>
            <td>${escapeHtml(data.service || "-")}</td>
          </tr>
        </table>

        <h3>Project brief</h3>

        <p>
          ${escapeHtml(data.brief || "-").replace(/\n/g, "<br>")}
        </p>

        <hr>

        <h3>Visitor location</h3>

        <p>
          <strong>City:</strong> ${escapeHtml(data.city || "Unknown")}<br>
          <strong>Country:</strong> ${escapeHtml(data.country || "Unknown")}
        </p>
      </div>
    `.trim(),
  });
}

export const submitContactServer = createServerFn({ method: "POST" })
  .validator((data: {
    name: string;
    email: string;
    phone: string;
    service: string;
    brief: string;
  }) => data)
  .handler(async ({ data }) => {
    const name = data.name.trim();
    const email = data.email.trim();
    const phone = data.phone.trim();
    const service = data.service.trim();
    const brief = data.brief.trim();

    if (!name || !email || !brief) {
      throw new Error("Name, email and project brief are required.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      throw new Error("Please provide a valid email address.");
    }

    let city = "Unknown";
    let country = "Unknown";

    try {
      const request = getRequest();

      const forwardedFor =
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip");

      const ip =
        forwardedFor?.split(",")[0]?.trim() ||
        "";

      if (ip) {
        const response = await fetch(
          `https://ipapi.co/${encodeURIComponent(ip)}/json/`,
        );

        if (response.ok) {
          const location = (await response.json()) as {
            city?: string;
            country_name?: string;
          };

          city = location.city?.trim() || "Unknown";
          country = location.country_name?.trim() || "Unknown";
        }
      }
    } catch {
      // Location is optional. Email should still be sent.
    }

    await sendContactEmail({
      name,
      email,
      phone,
      service,
      brief,
      city,
      country,
    });

    return {
      success: true,
    };
  });