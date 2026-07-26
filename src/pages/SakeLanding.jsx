import DrinkLandingLayout from "@/components/izakaya/DrinkLandingLayout";

const sake = {
  name: "Sake",
  jp: "日本酒",
  price: "$70/year",
  desc: "A warm cup of junmai.",
  blurb:
    "享有Highball酒友所有權益 + 1對1為你拆解職場問題＋不定期酒友聚會",
  image:
    "https://images.unsplash.com/photo-1561535893-bb7a98c7ee45?auto=format&fit=crop&w=1600&q=80",
  link: "https://buy.stripe.com/eVqeVffn6bUaeUD4XI8Vi02",
  cta: "Click here and Join membership",
  qrImage: "", // TODO: paste your QR code image URL here
};

export default function SakeLanding() {
  return <DrinkLandingLayout drink={sake} />;
}