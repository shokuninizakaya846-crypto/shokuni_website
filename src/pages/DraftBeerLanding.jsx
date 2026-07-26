import DrinkLandingLayout from "@/components/izakaya/DrinkLandingLayout";

const draftBeer = {
  name: "Draft Beer",
  jp: "生ビール",
  price: "$30",
  desc: "Kirin on tap.",
  blurb:
    "加入 VIP 私密圍爐群。隨時入嚟宣洩職場負能量、匿名吐苦水，有人聽你講真話。",
  image:
    "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=1600&q=80",
  link: "https://buy.stripe.com/bJe4gB8YI6zQ3bV0Hs8Vi01", // TODO: paste your payment / donation link here
  cta: "Click here and Buy me this drink",
  qrImage: "", // TODO: paste your QR code image URL here
};

export default function DraftBeerLanding() {
  return <DrinkLandingLayout drink={draftBeer} />;
}