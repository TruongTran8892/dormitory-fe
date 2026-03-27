import { NextResponse } from "next/server";

const GOOGLE_SHEET_WEBHOOK_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL;

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    if (!payload?.name || !payload?.contact) {
      return NextResponse.json({ ok: false, message: "Invalid payload" }, { status: 400 });
    }

    if (!GOOGLE_SHEET_WEBHOOK_URL) {
      return NextResponse.json(
        { ok: false, message: "Missing GOOGLE_SHEET_WEBHOOK_URL" },
        { status: 500 },
      );
    }

    const upstream = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      // Apps Script Web App usually returns 302 after handling POST.
      // If we auto-follow, POST can be converted to GET and fail (405).
      redirect: "manual",
    });

    if (upstream.status >= 400) {
      return NextResponse.json(
        { ok: false, message: "Google Sheet webhook request failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Server error" }, { status: 500 });
  }
}
