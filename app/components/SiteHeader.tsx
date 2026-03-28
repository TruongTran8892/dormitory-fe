"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PHONE = "0938453548";

const desktopNavLinkClass =
  "chill-transition relative inline-block py-1 text-neutral-600 hover:text-premium-gold underline decoration-2 underline-offset-[10px] decoration-transparent hover:decoration-premium-gold";

const mobileNavLinkClass =
  "chill-transition py-3 px-3 -mx-1 border-b border-stone-200 rounded-lg text-neutral-800 hover:text-premium-gold hover:bg-stone-50/90 active:bg-stone-100/80";

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
    <header className="animate-site-header fixed w-full z-[100] bg-[#FCFAf7]/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <nav className="container mx-auto pl-6 pr-3 md:px-6 py-5 flex justify-between items-center gap-3 flex-nowrap">
        <Link href="/" className="chill-transition cursor-pointer inline-block rounded-md hover:opacity-90 hover:scale-[1.02]">
          <Image
            src="/logo-nams-dom.svg"
            alt="Nấm's Dormitory"
            width={220}
            height={60}
            priority
            className="h-9 md:h-12 w-auto"
          />
        </Link>

        <div className="hidden lg:flex space-x-10 font-medium text-sm uppercase tracking-[0.15em]">
          <Link href="/about" className={desktopNavLinkClass}>
            Phong cách
          </Link>
          <Link href="/blogs" className={desktopNavLinkClass}>
            Blog
          </Link>
          <Link href="/#pod-details" className={desktopNavLinkClass}>
            Pod & Dịch vụ
          </Link>
          <Link href="/#location" className={desktopNavLinkClass}>
            Vị trí Vàng
          </Link>
          <Link href="/#booking" className={desktopNavLinkClass}>
            Liên hệ
          </Link>
        </div>

        <div className="flex items-center gap-1.5 md:gap-2">
          <a
            href={`tel:${PHONE}`}
            className="chill-transition chill-lift inline-flex items-center justify-center bg-premium-gold hover:bg-[#b08d4a] text-white h-8 px-3 lg:h-auto lg:px-6 py-0 lg:py-2 rounded-full font-extrabold text-[10px] md:text-sm tracking-[0.04em] lg:tracking-widest uppercase whitespace-nowrap leading-none shadow-lg hover:shadow-xl shrink-0"
          >
            TƯ VẤN NGAY
          </a>

          <button
            type="button"
            aria-label={isOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="chill-transition lg:hidden inline-flex items-center justify-center h-8 w-8 p-0 m-0 rounded-full border border-stone-200 bg-white/70 hover:bg-white hover:border-stone-300 shrink-0 text-neutral-800"
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
                className="chill-transition inline-flex items-center justify-center h-8 w-8 p-0 m-0 rounded-full border border-stone-200 bg-white hover:bg-stone-50 hover:border-stone-300 text-neutral-800"
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

            <div className="flex flex-col font-semibold">
              <Link href="/about" onClick={close} className={mobileNavLinkClass}>
                Phong cách
              </Link>
              <Link href="/blogs" onClick={close} className={mobileNavLinkClass}>
                Blog
              </Link>
              <Link href="/#pod-details" onClick={close} className={mobileNavLinkClass}>
                Pod & Dịch vụ
              </Link>
              <Link href="/#location" onClick={close} className={mobileNavLinkClass}>
                Vị trí Vàng
              </Link>
              <Link href="/#booking" onClick={close} className={mobileNavLinkClass}>
                Liên hệ
              </Link>
            </div>

            <div className="mt-5 pb-1">
              <a
                href={`tel:${PHONE}`}
                className="chill-transition chill-lift inline-flex items-center justify-center w-full bg-premium-gold hover:bg-[#b08d4a] text-white py-3 rounded-full font-extrabold text-sm tracking-widest uppercase shadow-lg hover:shadow-xl"
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

