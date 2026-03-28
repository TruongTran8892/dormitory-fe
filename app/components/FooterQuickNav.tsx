import Link from "next/link";

const links = [
  { href: "/about", label: "Phong cách" },
  { href: "/blogs", label: "Blog" },
  { href: "/#pod-details", label: "Pod & dịch vụ" },
  { href: "/#location", label: "Vị trí" },
  { href: "/#booking", label: "Liên hệ & đăng ký" },
] as const;

export default function FooterQuickNav() {
  return (
    <div>
      <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-8 text-neutral-400">
        Khám phá
      </h4>
      <nav aria-label="Liên kết nhanh chân trang" className="flex flex-col gap-3.5">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="chill-transition text-sm font-semibold text-neutral-800 hover:text-premium-gold w-fit rounded-sm"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
