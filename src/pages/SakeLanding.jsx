import DrinkLandingLayout from "@/components/izakaya/DrinkLandingLayout";

const sake = {
  name: "Sake",
  jp: "日本酒",
  price: "$30",
  desc: "A warm cup of junmai.",
  blurb:
    "Brewed with polished rice and pure mountain water. Served warm in a ceramic ochoko, the way the shokunin intended.",
  image:
    "https://images.unsplash.com/photo-1530171704280-0c1a1b6b6a6a?auto=format&fit=crop&w=1600&q=80",
};

export default function SakeLanding() {
  return <DrinkLandingLayout drink={sake} />;
}