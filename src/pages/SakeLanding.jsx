import DrinkLandingLayout from "@/components/izakaya/DrinkLandingLayout";

const sake = {
  name: "Sake",
  jp: "日本酒",
  price: "$30",
  desc: "A warm cup of junmai.",
  blurb:
    "Brewed with polished rice and pure mountain water. Served warm in a ceramic ochoko, the way the shokunin intended.",
  image:
    "https://images.unsplash.com/photo-1561535893-bb7a98c7ee45?auto=format&fit=crop&w=1600&q=80",
  link: "https://payme-cashout-secure.hsbc.com.hk/paycode.html?page=paycode$30", // TODO: paste your payment / donation link here
  qrImage: "", // TODO: paste your QR code image URL here
};

export default function SakeLanding() {
  return <DrinkLandingLayout drink={sake} />;
}