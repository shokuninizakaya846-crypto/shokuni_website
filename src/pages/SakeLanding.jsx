import DrinkLandingLayout from "@/components/izakaya/DrinkLandingLayout";

const sake = {
  name: "Sake",
  jp: "日本酒",
  price: "$70",
  desc: "A warm cup of junmai.",
  blurb:
    "享有Highball酒友 所有權益 + 不定期酒友聚會",
  image:
    "https://images.unsplash.com/photo-1561535893-bb7a98c7ee45?auto=format&fit=crop&w=1600&q=80",
  link: "https://buy.stripe.com/00wbJ33Eogaqh2L3TE8Vi00", // TODO: paste your payment / donation link here
  cta: "Click here and Buy me this drink",
  qrImage: "", // TODO: paste your QR code image URL here
};

export default function SakeLanding() {
  return <DrinkLandingLayout drink={sake} />;
}