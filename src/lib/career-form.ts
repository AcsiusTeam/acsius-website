/**
 * Career application form helper.
 *
 * Sends the application to the backend where Nodemailer handles
 * SMTP delivery and attaches the applicant's resume.
 */

export const CAREER_FORM_RECIPIENT = "info@acsius.com";

export type CareerFormValues = {
  role: string;
  name: string;
  email: string;
  phone: string;
  resume: File | null;
};

export function readCareerForm(form: HTMLFormElement): CareerFormValues {
  const data = new FormData(form);

  const get = (key: string) => String(data.get(key) ?? "").trim();

  const resumeValue = data.get("resume");

  return {
    role: get("role"),
    name: get("name"),
    email: get("email"),
    phone: get("phone"),
    resume: resumeValue instanceof File && resumeValue.size > 0
      ? resumeValue
      : null,
  };
}

export function buildCareerSubject(values: CareerFormValues) {
  return `Job Application - ${values.name || "New Applicant"} - ${
    values.role || "General Application"
  }`;
}

export async function submitCareerForm(form: HTMLFormElement) {
  const values = readCareerForm(form);

  const formData = new FormData(form);

  const response = await fetch("/api/career", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    let message = "Unable to submit application.";

    try {
      const result = await response.json();

      if (result?.message) {
        message = result.message;
      }
    } catch {
      // Ignore JSON parsing errors.
    }

    throw new Error(message);
  }

  return {
    values,
    subject: buildCareerSubject(values),
  };
}