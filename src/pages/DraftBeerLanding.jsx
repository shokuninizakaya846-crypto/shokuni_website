import DrinkLandingLayout from "@/components/izakaya/DrinkLandingLayout";

const draftBeer = {
  name: "Draft Beer",
  jp: "生ビール",
  price: "$5",
  desc: "Kirin on tap.",
  blurb:
    "Ice-cold Kirin poured to a perfect two-finger head. Crisp, clean, and best enjoyed at the counter.",
  image:
    "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=1600&q=80",
};

export default function DraftBeerLanding() {
  return <DrinkLandingLayout drink={draftBeer} />;
}