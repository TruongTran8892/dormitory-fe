import Image from "next/image";
import Link from "next/link";
import FooterQuickNav from "./FooterQuickNav";
import { LocationTeardropIcon } from "./LocationTeardropIcon";
import { MAP_DIRECTIONS_URL, SITE_ADDRESS_LINE } from "../site-config";

export default function SiteFooter() {
  return (
    <footer className="bg-white py-20 px-6 border-t border-stone-100 mt-auto">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          <div>
            <Link
              href="/"
              className="chill-transition mb-6 cursor-pointer block w-fit rounded-md hover:opacity-90 hover:scale-[1.02]"
            >
              <Image
                src="/logo-nams-dom.svg"
                alt="Nấm's Dormitory"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-stone-400 text-xs leading-[2] font-light max-w-xs uppercase tracking-wider">
              Lưu trú tiện nghi, an tâm học tập. Dành riêng cho sinh viên Thủ Đức.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-8 text-neutral-400">
              Vị trí
            </h4>
            <a
              href={MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="chill-transition chill-lift group inline-flex items-center gap-2 text-stone-600 text-sm font-light not-italic decoration-stone-300 underline-offset-4 hover:text-premium-gold hover:decoration-premium-gold rounded-lg"
            >
              <LocationTeardropIcon className="h-6 w-6" />
              <span className="leading-normal underline decoration-inherit group-hover:decoration-premium-gold">
                {SITE_ADDRESS_LINE}
              </span>
            </a>
          </div>
          <FooterQuickNav />
        </div>
        <div className="text-[10px] text-stone-400 uppercase tracking-widest flex flex-col md:flex-row justify-between items-center border-t border-stone-100 pt-10">
          <p>© 2026 Nấm&apos;s Dormitory. Cozy Living for Students.</p>
        </div>
      </div>
    </footer>
  );
}
