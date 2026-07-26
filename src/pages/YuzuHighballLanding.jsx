import DrinkLandingLayout from "@/components/izakaya/DrinkLandingLayout";

const yuzuHighball = {
  name: "Yuzu Highball",
  jp: "柚子ハイボール",
  price: "$45",
  desc: "House special.",
  blurb:
    "入群 + 每週解鎖 1 篇「會員專屬深層文章」（AI 攻略，極度真實嘅職場政治拆解、爆料案例）",
  image:
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80",
  link: "https://buy.stripe.com/eVqeVffn6bUaeUD4XI8Vi02", // TODO: paste your payment / donation link here
  cta: "Click here and Buy me this drink",
  qrImage: "", // TODO: paste your QR code image URL here
};

export default function YuzuHighballLanding() {
  return <DrinkLandingLayout drink={yuzuHighball} />;
}