import DrinkLandingLayout from "@/components/izakaya/DrinkLandingLayout";

const draftBeer = {
  name: "Draft Beer",
  jp: "生ビール",
  price: "$45",
  desc: "Kirin on tap.",
  blurb:
    "入群 + 每週解鎖 1 篇「會員專屬深層文章」（AI 實用攻略，極度真實嘅職場政治拆解、爆料案例、唔講得嘅生存潛規則）",
  image:
    "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=1600&q=80",
  link: "https://buy.stripe.com/bJe4gB8YI6zQ3bV0Hs8Vi01", // TODO: paste your payment / donation link here
  cta: "Click here and Buy me this drink",
  qrImage: "", // TODO: paste your QR code image URL here
};

export default function DraftBeerLanding() {
  return <DrinkLandingLayout drink={draftBeer} />;
}