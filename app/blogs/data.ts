export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Từ khóa phục vụ meta SEO (không nhồi nhét trong nội dung) */
  keywords: string[];
  thumbnailSrc: string;
  bannerSrc: string;
  thumbnailAlt: string;
  bannerAlt: string;
  publishedAt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "chon-phong-tro-sinh-vien-hay-ky-tuc-xa",
    title: "Phòng trọ sinh viên hay ký túc xá? Cách thuê trọ hợp lý tại Thủ Đức",
    excerpt:
      "So sánh phòng trọ, thuê trọ truyền thống và ký túc xá sinh viên để bạn chọn chỗ ở vừa sạch sẽ, vừa phù hợp ngân sách — kể cả khi đang tìm phòng trọ giá rẻ.",
    keywords: [
      "phòng trọ",
      "phòng trọ sinh viên",
      "thuê trọ",
      "ký túc xá",
      "ký túc xá sinh viên",
      "phòng trọ sạch sẽ",
      "phòng trọ giá rẻ",
      "Thủ Đức",
    ],
    thumbnailSrc: "/experience/exp-1.jpg",
    bannerSrc: "/experience/exp-2.jpg",
    thumbnailAlt: "Không gian lưu trú sinh viên hiện đại tại Thủ Đức — phòng trọ và ký túc xá",
    bannerAlt: "Khu ký túc xá và phòng trọ sinh viên có thiết kế gọn gàng, đủ ánh sáng",
    publishedAt: "2026-03-20",
    content: [
      "Khi lên đại học, hầu hết sinh viên đều phải quyết định giữa các hình thức chỗ ở: thuê trọ phòng đơn, ở ghép, hay chọn ký túc xá sinh viên / mô hình tương đương. Mỗi lựa chọn có ưu điểm riêng; điều quan trọng là khớp với thói quen sinh hoạt, tuyến đường đi học và mức chi phí bạn cam kết được trong thời gian dài.",
      "Phòng trọ truyền thống thường linh hoạt vị trí và giá, nhưng chất lượng dao động lớn. Một phòng trọ giá rẻ có thể hợp túi tiền tháng đầu, song nếu thiếu quy tắc vệ sinh chung hay hợp đồng không rõ ràng, bạn dễ phát sinh chi phí ẩn hoặc bất tiện khi sống lâu dài. Vì vậy, khi đi xem phòng trọ, hãy chủ động hỏi về điện nước, internet, giờ giấc và cách dọn dẹp khu vực chung.",
      "Phòng trọ sinh viên ổn định thường hướng tới tiêu chí phòng trọ sạch sẽ, có chỗ phơi đồ, lối thoát hiểm rõ ràng và môi trường xung quanh an toàn. Nếu bạn ưu tiên yên tĩnh để học, nên tránh các dãy trọ sát quán ồn ào trừ khi chấp nhận đánh đổi; ngược lại, khu trọ gần trường và bến xe buýt lại tiết kiệm thời gian đi lại đáng kể.",
      "Ký túc xá và các mô hình ký túc xá sinh viên chuyên nghiệp thường gom dịch vụ (vệ sinh khu chung, máy giặt, Wi-Fi, bảo vệ hoặc camera) vào một mức phí minh bạch. Điều này giúp bạn dễ dự trù chi phí hơn so với thuê trọ cá nhân mà mỗi tháng phải cộng thêm nhiều khoản lẻ. Với sinh viên năm nhất hoặc người lần đầu sống xa nhà, đây thường là lựa chọn an tâm hơn.",
      "Thuê trọ dù theo hình thức nào cũng nên có hợp đồng hoặc biên bản ghi rõ tiền cọc, kỳ thanh toán, điều kiện hoàn cọc và trách nhiệm sửa chữa. Chụp ảnh hiện trạng phòng lúc nhận để tránh tranh cãi khi trả phòng. Những bước nhỏ này giúp bạn yên tâm tập trung học tập thay vì lo xung đột với chủ nhà.",
      "Tại Thủ Đức, nhu cầu phòng trọ sinh viên và ký túc xá luôn cao; việc đặt lịch xem phòng sớm và so sánh 2–3 nơi sẽ giúp bạn đánh giá đúng mức độ phòng trọ sạch sẽ thực tế chứ không chỉ qua ảnh quảng cáo. Nếu bạn đang cân nhắc giữa phòng trọ giá rẻ và mô hình trọn gói, hãy quy đổi sang “chi phí tổng mỗi tháng” để so sánh công bằng.",
      "Nấm's Dormitory hướng tới trải nghiệm gần với ký túc xá sinh viên hiện đại: không gian riêng tư, vận hành ổn định và thông tin rõ ràng, phù hợp cho bạn muốn vừa an tâm vừa không phải tự lo mọi thứ như khi thuê trọ tự do. Bạn có thể đặt lịch tham quan trực tiếp để cảm nhận không gian trước khi quyết định.",
    ],
  },
  {
    slug: "phong-tro-sach-se-bang-kiem-tra-truoc-khi-thue",
    title: "Phòng trọ sạch sẽ: bảng kiểm tra trước khi thuê trọ",
    excerpt:
      "Checklist thực tế giúp sinh viên chọn phòng trọ sạch sẽ, tránh nhầm phòng trọ giá rẻ nhưng kém vệ sinh — áp dụng được cả khi bạn đang so với ký túc xá sinh viên.",
    keywords: [
      "phòng trọ sạch sẽ",
      "phòng trọ",
      "phòng trọ sinh viên",
      "thuê trọ",
      "ký túc xá sinh viên",
      "phòng trọ giá rẻ",
    ],
    thumbnailSrc: "/experience/exp-4.jpg",
    bannerSrc: "/experience/exp-4.jpg",
    thumbnailAlt: "Phòng trọ và ký túc xá sạch sẽ, gọn gàng cho sinh viên",
    bannerAlt: "Không gian phòng trọ sạch sẽ, đủ ánh sáng tự nhiên",
    publishedAt: "2026-03-12",
    content: [
      "Tiêu chí phòng trọ sạch sẽ không chỉ là sàn lau bóng khi đi xem, mà còn là mùi ẩm, nấm mốc góc tường, thoát nước nhà vệ sinh và tình trạng rác khu chung. Sinh viên thường ở liên tục nhiều tháng; một phòng ẩm sẽ ảnh hưởng sức khỏe và chất lượng học tập, dù giá có hấp dẫn đến đâu.",
      "Khi tìm phòng trọ sinh viên, hãy xem phòng vào ban ngày để đánh giá ánh sáng và thông gió. Phòng có cửa sổ hướng thoáng thường dễ duy trì phòng trọ sạch sẽ hơn phòng kín hoàn toàn. Đồng thời kiểm tra quạt/máy lạnh, chập điện và ổ cắm — an toàn là phần không thể tách rời của môi trường ở lành mạnh.",
      "Thuê trọ cùng bạn cùng phòng hoặc cùng dãy đòi hỏi thỏa thuận rõ về dọn vệ sinh, tủ lạnh chung và tài sản cá nhân. Nếu chủ trọ không cung cấp thùng rác hoặc lịch thu gom rác cố định, khu phòng trọ dễ xuống cấp nhanh. Đừng ngại hỏi các bạn đang ở về thực tế sinh hoạt hằng ngày.",
      "So với ký túc xá sinh viên có đội vệ sinh định kỳ, phòng trọ tự do đặt trách nhiệm lên người thuê nhiều hơn. Nếu bạn muốn giảm việc nhà nhưng vẫn cần không gian riêng, các mô hình lai giữa ký túc xá và căn hộ dịch vụ có thể phù hợp hơn là phòng trọ giá rẻ nhưng thiếu quy tắc chung.",
      "Trước khi ký hợp đồng thuê trọ, chụp lại tình trạng tường, trần, thiết bị và gửi kèm email hoặc tin nhắn xác nhận cho chủ nhà. Việc này bảo vệ cả hai bên và giúp bạn yên tâm khi đầu tư đồ đạc vào phòng. Một phòng trọ sạch sẽ kết hợp minh bạch trong giao tiếp sẽ bền vững hơn về lâu dài.",
    ],
  },
  {
    slug: "phong-tro-gia-re-sinh-vien-can-luu-y-gi",
    title: "Phòng trọ giá rẻ cho sinh viên: lưu ý để thuê trọ không rủi ro",
    excerpt:
      "Phòng trọ giá rẻ luôn hấp dẫn, nhưng thuê trọ kiểu này cần đọc kỹ điều khoản và đối chiếu với phòng trọ sạch sẽ, an toàn — và so sánh với ký túc xá nếu bạn cần ổn định lâu dài.",
    keywords: [
      "phòng trọ giá rẻ",
      "phòng trọ sinh viên",
      "thuê trọ",
      "phòng trọ",
      "ký túc xá",
      "phòng trọ sạch sẽ",
    ],
    thumbnailSrc: "/experience/exp-6.jpg",
    bannerSrc: "/experience/exp-3.jpg",
    thumbnailAlt: "Sinh viên tìm phòng trọ giá rẻ và ký túc xá tại Thủ Đức",
    bannerAlt: "Khu nhà trọ và ký túc xá khu vực Thủ Đức",
    publishedAt: "2026-03-05",
    content: [
      "Phòng trọ giá rẻ là cụm từ được tìm kiếm nhiều nhất mỗi mùa tuyển sinh, nhưng mức giá thấp đôi khi đi kèm vị trí xa trường, điện nước tính theo đồng hồ riêng hoặc thiếu thiết bị an toàn cháy nổ. Sinh viên nên yêu cầu bảng giá điện nước theo quy định và hóa đơn minh bạch để tránh bị “đội” phí cuối tháng.",
      "Một phòng trọ sinh viên rẻ nhưng cách trường quá xa có thể làm tăng chi phí xăng xe hoặc Grab, khiến tổng chi phí thực tế không còn hợp lý. Khi cân nhắc thuê trọ, hãy cộng chi phí đi lại và thời gian di chuyển — đó là phần “giá ẩn” ít được ghi trong quảng cáo phòng trọ giá rẻ.",
      "Đừng hy sinh tiêu chí phòng trọ sạch sẽ chỉ vì tiết kiệm vài trăm nghìn. Ẩm mốc, côn trùng hay cửa không khóa an toàn sẽ ảnh hưởng giấc ngủ và sức khỏe. Nếu ngân sách hạn hẹp, có thể cân nhắc ở ghép có quy tắc rõ ràng hoặc các gói ký túc xá sinh viên có mức phí cố định theo tháng.",
      "Ký túc xá hoặc mô hình tương đương thường công bố một mức giá trọn gói hoặc gần trọn gói, giúp bạn so sánh trực tiếp với phòng trọ giá rẻ mà phải tự lo mọi khoản phụ. Với một số bạn, sự ổn định và ít thủ tục còn quan trọng hơn việc tối đa hóa tiết kiệm ngắn hạn.",
      "Trước khi chốt thuê trọ, hãy đọc kỹ hợp đồng: thời hạn, cọc, điều kiện chuyển phòng, ai chịu trách nhiệm sửa đồ hỏng. Nếu chủ nhà từ chối ký bằng văn bản, đó là dấu hiệu cần cân nhắc thêm. Chọn phòng trọ hay ký túc xá đều nên dựa trên minh bạch và an toàn, không chỉ mức giá niêm yết.",
      "Nấm's Dormitory phù hợp sinh viên muốn giảm rủi ro khi thuê trọ lần đầu: chi phí và tiện ích được trao đổi rõ từ đầu, không gian hướng tới phòng trọ sạch sẽ và vận hành chuyên nghiệp thay vì chỉ chạy theo mức phòng trọ giá rẻ trên mạng mà thiếu kiểm chứng thực tế.",
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
