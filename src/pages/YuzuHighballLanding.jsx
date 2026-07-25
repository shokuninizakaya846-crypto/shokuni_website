import DrinkLandingLayout from "@/components/izakaya/DrinkLandingLayout";

const yuzuHighball = {
  name: "Yuzu Highball",
  jp: "柚子ハイボール",
  price: "$7",
  desc: "House special.",
  blurb:
    "Japanese whisky, soda, and a twist of fresh yuzu. Bright, citrusy, and dangerously smooth — the tavern's signature pour.",
  image:
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80",
};

export default function YuzuHighballLanding() {
  return <DrinkLandingLayout drink={yuzuHighball} />;
}