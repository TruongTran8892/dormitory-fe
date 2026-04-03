"use client";

import { FormEvent, useState } from "react";
import { submitLeadToSheet } from "../lib/submitLeadToSheet";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [school, setSchool] = useState("ĐH Ngân hàng");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const result = await submitLeadToSheet({
        name,
        contact,
        school,
        source: "Website Nấm's Dormitory",
        createdAt: new Date().toISOString(),
      });
      if (!result.ok) {
        if (result.message === "Missing GOOGLE_SHEET_WEBHOOK_URL") {
          setStatus("Hệ thống chưa cấu hình kết nối Google Sheet. Vui lòng báo quản trị viên.");
        } else {
          setStatus("Gửi đăng ký chưa thành công. Vui lòng thử lại sau ít phút.");
        }
        setIsSubmitting(false);
        return;
      }
      setStatus("Đăng ký thành công! Bên mình sẽ liên hệ bạn sớm nhất.");
      setName("");
      setContact("");
      setSchool("ĐH Ngân hàng");
    } catch {
      setStatus("Gửi đăng ký chưa thành công. Vui lòng thử lại sau ít phút.");
    }
    setIsSubmitting(false);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-stone-400">
          Danh xưng
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nguyễn Văn A"
          className="w-full rounded-xl border border-stone-200 px-4 py-3 focus:border-premium-gold focus:ring-2 focus:ring-premium-gold/20 outline-none transition text-sm"
        />
      </div>
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-stone-400">
          Phương thức liên hệ
        </label>
        <input
          type="text"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="0901 234 567 / Zalo"
          className="w-full rounded-xl border border-stone-200 px-4 py-3 focus:border-premium-gold focus:ring-2 focus:ring-premium-gold/20 outline-none transition text-sm"
        />
      </div>
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-stone-400">
          Trường đang theo học
        </label>
        <select
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          className="w-full rounded-xl border border-stone-200 px-4 py-3 focus:border-premium-gold focus:ring-2 focus:ring-premium-gold/20 outline-none transition text-sm bg-transparent"
        >
          <option>ĐH Ngân hàng</option>
          <option>Cao đẳng Công nghệ</option>
          <option>ĐH An ninh nhân dân</option>
          <option>ĐH SPKT</option>
          <option>Khác</option>
        </select>
      </div>
      <button
        disabled={isSubmitting}
        className="chill-transition chill-lift w-full rounded-xl bg-[#c58d4a] text-white py-4 mt-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#b07c40] shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Đang xử lý..." : "Đăng ký xem phòng"}
      </button>
      {status && <p className="text-xs text-stone-500">{status}</p>}
    </form>
  );
}
