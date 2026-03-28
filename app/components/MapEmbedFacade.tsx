"use client";

import { useState } from "react";
import { MAP_EMBED_URL } from "../site-config";
import { LocationTeardropIcon } from "./LocationTeardropIcon";

/**
 * Bản đồ nhúng chỉ mount iframe sau khi người dùng bật — giảm DOM ban đầu
 * (iframe Maps tạo rất nhiều node, ảnh hưởng Lighthouse / PSI).
 */
export default function MapEmbedFacade() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="rounded-lg shadow-2xl h-96 overflow-hidden border-2 border-premium-dark/10 map-container">
        <iframe
          src={MAP_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          title="Bản đồ Google Maps — Nấm's Dormitory"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className="rounded-lg shadow-2xl h-96 overflow-hidden border-2 border-premium-dark/10 bg-stone-200/90 flex flex-col items-center justify-center gap-4 px-6 text-center">
      <LocationTeardropIcon className="h-12 w-12 text-premium-gold shrink-0" aria-hidden />
      <p className="text-sm text-neutral-700 font-medium max-w-xs">
        Bản đồ tương tác chỉ tải khi bạn cần — giúp trang nhẹ và nhanh hơn.
      </p>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="chill-transition chill-lift inline-flex items-center gap-2 rounded-full bg-premium-dark text-white px-6 py-3 text-sm font-semibold hover:opacity-95 shadow-md"
      >
        Hiển thị bản đồ Google Maps
      </button>
    </div>
  );
}
