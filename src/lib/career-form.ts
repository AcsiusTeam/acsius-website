import { submitApplicationServer } from "@/lib/mailer/application";

export type ApplicationFormValues = {
    role: string;
    name: string;
    email: string;
    phone: string;
    designation: string;
    currentCtc: string;
    expectedCtc: string;
    noticePeriod: string;
    resume: File | null;
};

export function readApplicationForm(
    form: HTMLFormElement,
): ApplicationFormValues {
    const data = new FormData(form);

    const file = data.get("resume");

    return {
        role: String(data.get("role") ?? "").trim(),
        name: String(data.get("name") ?? "").trim(),
        email: String(data.get("email") ?? "").trim(),
        phone: String(data.get("phone") ?? "").trim(),
        designation: String(data.get("designation") ?? "").trim(),
        currentCtc: String(data.get("currentCtc") ?? "").trim(),
        expectedCtc: String(data.get("expectedCtc") ?? "").trim(),
        noticePeriod: String(data.get("noticePeriod") ?? "").trim(),
        resume:
            file instanceof File && file.size > 0
                ? file
                : null,
    };
}

export async function submitApplicationForm(
    form: HTMLFormElement,
) {
    const formData = new FormData(form);

    return submitApplicationServer({
        data: formData,
    });
}