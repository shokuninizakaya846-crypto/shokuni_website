import { useState } from "react";
import { motion } from "framer-motion";
import { CupSoda, Beer, Wine } from "lucide-react";
import { toast } from "sonner";

const drinks = [
  { icon: CupSoda, name: "Sake", price: "$3", desc: "A warm cup of junmai." },
  { icon: Beer, name: "Draft Beer", price: "$5", desc: "Kirin on tap." },
  { icon: Wine, name: "Yuzu Highball", price: "$7", desc: "House special." },
];

export default function DrinkSection() {
  const [selected, setSelected] = useState(null);

  const handleBuy = (drink) => {
    setSelected(drink.name);
    toast.success(`ありがとうございます! You bought a ${drink.name}.`);
  };

  return (
    <section id="drink" className="bg-background py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-body tracking-[0.2em] uppercase text-foreground/50">Buy me a drink</span>
          <h2 className="mt-4 font-heading font-normal text-[32px] md:text-[48px] leading-tight tracking-tight text-foreground">
            おごってください
          </h2>
          <p className="mt-4 text-sm font-body font-light text-foreground/60 max-w-md mx-auto">
            Enjoying the tavern? Send a little something to keep the lanterns lit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {drinks.map((drink, i) => (
            <motion.button
              key={drink.name}
              onClick={() => handleBuy(drink)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`p-8 rounded-2xl border text-center transition-all duration-300 ${selected === drink.name ? "border-aka bg-aka/5" : "border-border bg-card hover:border-aka/30"}`}
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-aka/10 flex items-center justify-center mb-5">
                <drink.icon className="w-6 h-6 text-aka" />
              </div>
              <h3 className="font-heading text-xl text-foreground">{drink.name}</h3>
              <p className="mt-1 text-xs font-body text-foreground/50">{drink.desc}</p>
              <p className="mt-4 font-heading text-2xl text-aka">{drink.price}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}