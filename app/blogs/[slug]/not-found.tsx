import Link from "next/link";

export default function BlogNotFound() {
  return (
    <main className="min-h-[60vh] bg-[#FCFAf7] text-neutral-800 pt-32 pb-24 px-6 text-center">
      <h1 className="hero-fade-up hero-fade-d1 text-2xl font-extrabold text-neutral-900">
        Không tìm thấy bài viết
      </h1>
      <p className="hero-fade-up hero-fade-d2 text-stone-600 mt-3 max-w-md mx-auto">
        Đường dẫn không đúng hoặc bài đã được gỡ. Vui lòng quay lại danh sách blog.
      </p>
      <Link
        href="/blogs"
        className="hero-fade-up hero-fade-d3 chill-transition inline-flex mt-8 text-premium-gold font-semibold hover:text-[#b08d4a] rounded-md hover:opacity-95"
      >
        ← Danh sách blog
      </Link>
    </main>
  );
}
