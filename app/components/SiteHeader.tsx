"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PHONE = "0938453548";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (menuRef.current?.contains(target)) return;
      if (toggleRef.current?.contains(target)) return;
      close();
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown, { capture: true });
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, [isOpen]);

  return (
    <header className="fixed w-full z-[100] bg-[#FCFAf7]/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <nav className="container mx-auto pl-6 pr-3 md:px-6 py-5 flex justify-between items-center gap-3 flex-nowrap">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/logo-nams-dom.svg"
            alt="Nấm's Dormitory"
            width={220}
            height={60}
            priority
            className="h-9 md:h-12 w-auto"
          />
        </Link>

        <div className="hidden lg:flex space-x-10 font-medium text-sm uppercase tracking-[0.15em] text-neutral-600">
          <Link href="/about" className="hover:text-premium-gold transition">
            Phong cách
          </Link>
          <Link href="/#pod-details" className="hover:text-premium-gold transition">
            Pod & Dịch vụ
          </Link>
          <Link href="/#location" className="hover:text-premium-gold transition">
            Vị trí Vàng
          </Link>
          <Link href="/#booking" className="hover:text-premium-gold transition">
            Liên hệ
          </Link>
        </div>

        <div className="flex items-center gap-1.5 md:gap-2">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center bg-premium-gold hover:bg-[#b08d4a] text-white h-8 px-3 lg:h-auto lg:px-6 py-0 lg:py-2 rounded-full font-extrabold text-[10px] md:text-sm transition tracking-[0.04em] lg:tracking-widest uppercase whitespace-nowrap leading-none shadow-lg shrink-0"
          >
            TƯ VẤN NGAY
          </a>

          <button
            type="button"
            aria-label={isOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-8 w-8 p-0 m-0 rounded-full border border-stone-200 bg-white/70 hover:bg-white transition shrink-0 text-neutral-800"
            ref={toggleRef}
          >
            <svg
              aria-hidden
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="block shrink-0"
            >
              <line x1="5" y1="6.5" x2="19" y2="6.5" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="17.5" x2="19" y2="17.5" />
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <>
          <div
            className="lg:hidden absolute left-0 right-0 top-full z-[110] bg-[#FCFAf7] border-t border-stone-200 shadow-2xl"
            ref={menuRef}
          >
            <div className="container mx-auto px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-extrabold tracking-tight text-neutral-900">Menu</span>
              <button
                type="button"
                aria-label="Đóng menu"
                className="inline-flex items-center justify-center h-8 w-8 p-0 m-0 rounded-full border border-stone-200 bg-white hover:bg-stone-50 transition text-neutral-800"
                onClick={close}
              >
                <svg
                  aria-hidden
                  width={15}
                  height={15}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.25}
                  strokeLinecap="round"
                  className="block shrink-0"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col font-semibold text-neutral-800">
              <Link href="/about" onClick={close} className="py-3 border-b border-stone-200">
                Phong cách
              </Link>
              <Link href="/#pod-details" onClick={close} className="py-3 border-b border-stone-200">
                Pod & Dịch vụ
              </Link>
              <Link href="/#location" onClick={close} className="py-3 border-b border-stone-200">
                Vị trí Vàng
              </Link>
              <Link href="/#booking" onClick={close} className="py-3 border-b border-stone-200">
                Liên hệ
              </Link>
            </div>

            <div className="mt-5 pb-1">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center w-full bg-premium-gold hover:bg-[#b08d4a] text-white py-3 rounded-full font-extrabold text-sm tracking-widest uppercase shadow-lg transition"
                onClick={close}
              >
                Gọi tư vấn: {PHONE}
              </a>
            </div>
          </div>
          </div>
        </>
      )}
    </header>
  );
}

