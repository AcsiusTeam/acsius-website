/**
 * Contact form helper.
 *
 * Email delivery via a backend is intentionally not wired up yet. For now the
 * submission is composed into a message addressed to info@acsius.com with the
 * agreed subject line and body, including the visitor's approximate city and
 * country detected from their IP (there are no city/country inputs on the form).
 */

export const CONTACT_FORM_RECIPIENT = "info@acsius.com";

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  brief: string;
};

export type VisitorLocation = {
  city: string;
  country: string;
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

/** Approximate city/country from the visitor's IP. Never throws. */
export async function detectVisitorLocation(): Promise<VisitorLocation> {
  try {
    const res = await fetch("https://ipapi.co/json/");
    if (!res.ok) throw new Error(String(res.status));
    const json = (await res.json()) as { city?: string; country_name?: string };
    return {
      city: json.city?.trim() || "Unknown",
      country: json.country_name?.trim() || "Unknown",
    };
  } catch {
    return { city: "Unknown", country: "Unknown" };
  }
}

export function buildContactSubject(values: ContactFormValues) {
  return `Contact form - ${values.name || "New enquiry"}`;
}

export function buildContactBody(values: ContactFormValues, location: VisitorLocation) {
  return [
    `Full name: ${values.name || "-"}`,
    `Work email: ${values.email || "-"}`,
    `Phone: ${values.phone || "-"}`,
    `Service needed: ${values.service || "-"}`,
    "",
    "Project brief:",
    values.brief || "-",
    "",
    "— Visitor location (auto-detected) —",
    `City: ${location.city}`,
    `Country: ${location.country}`,
  ].join("\n");
}

/**
 * Composes the enquiry and hands it to the visitor's mail client, addressed to
 * info@acsius.com. Replace this with a server-side send when email is enabled.
 */
export async function submitContactForm(form: HTMLFormElement) {
  const values = readContactForm(form);
  const location = await detectVisitorLocation();
  const subject = buildContactSubject(values);
  const body = buildContactBody(values, location);

  const href = `mailto:${CONTACT_FORM_RECIPIENT}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  if (typeof window !== "undefined") {
    window.location.href = href;
  }

  return { subject, body, values, location };
}
