import { submitContactServer } from "@/lib/mailer/contact";

export const CONTACT_FORM_RECIPIENT = "info@acsius.com";

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  brief: string;
};

export function readContactForm(form: HTMLFormElement): ContactFormValues {
  const data = new FormData(form);
  const get = (key: string) => String(data.get(key) ?? "").trim();

  return {
    name: get("name"),
    email: get("email"),
    phone: get("phone"),
    service: get("service"),
    brief: get("brief"),
  };
}

export async function submitContactForm(form: HTMLFormElement) {
  const values = readContactForm(form);

  return submitContactServer({
    data: {
      ...values,
      pageUrl: typeof window === "undefined" ? "" : window.location.href,
    },
  });
}
