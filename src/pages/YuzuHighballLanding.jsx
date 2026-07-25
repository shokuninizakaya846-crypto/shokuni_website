import DrinkLandingLayout from "@/components/izakaya/DrinkLandingLayout";

const yuzuHighball = {
  name: "Yuzu Highball",
  jp: "柚子ハイボール",
  price: "$70",
  desc: "House special.",
  blurb:
    "Japanese whisky, soda, and a twist of fresh yuzu. Bright, citrusy, and dangerously smooth — the tavern's signature pour.",
  image:
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80",
  link: "https://buy.stripe.com/eVqeVffn6bUaeUD4XI8Vi02", // TODO: paste your payment / donation link here
  cta: "Click here and Buy me this drink",
  qrImage: "", // TODO: paste your QR code image URL here
};

export default function YuzuHighballLanding() {
  return <DrinkLandingLayout drink={yuzuHighball} />;
}