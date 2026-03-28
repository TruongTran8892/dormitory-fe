/** Ghim bản đồ: giọt có lỗ tròn + elip đế; màu từ CSS vars trong globals.css */
export function LocationTeardropIcon({ className }: { className?: string }) {
  return (
    <svg
      className={["shrink-0", className].filter(Boolean).join(" ")}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <ellipse
        className="transition-[fill] duration-200 group-hover:fill-[var(--map-pin-ground-hover)]"
        cx={12}
        cy={20.85}
        rx={4.85}
        ry={1.45}
        fill="var(--map-pin-ground)"
      />
      <path
        className="transition-[fill] duration-200 group-hover:fill-[var(--map-pin-fill-hover)]"
        fill="var(--map-pin-fill)"
        fillRule="evenodd"
        d="M12 2.75c-3.42 0-6.2 2.78-6.2 6.2 0 4.45 5.48 10.75 6.2 11.55a.5.5 0 00.78 0c.72-.8 6.2-7.1 6.2-11.55 0-3.42-2.78-6.2-6.2-6.2z M12 6.45a2.05 2.05 0 100 4.1 2.05 2.05 0 000-4.1z"
      />
    </svg>
  );
}
