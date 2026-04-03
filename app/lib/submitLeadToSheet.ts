const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL;

export type LeadPayload = {
  name: string;
  contact: string;
  school: string;
  source: string;
  createdAt: string;
};

/** Gửi lead thẳng tới Google Apps Script (static hosting — không qua Next API). */
export async function submitLeadToSheet(
  payload: LeadPayload,
): Promise<{ ok: true } | { ok: false; message: string }> {
  if (!webhookUrl?.trim()) {
    return { ok: false, message: "Missing GOOGLE_SHEET_WEBHOOK_URL" };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "manual",
    });

    if (res.status >= 400) {
      return { ok: false, message: "Google Sheet webhook request failed" };
    }

    return { ok: true };
  } catch {
    return { ok: false, message: "Server error" };
  }
}
