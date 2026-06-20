import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import men from "@/assets/cat-men.jpg";
import women from "@/assets/cat-women.jpg";
import footwear from "@/assets/cat-footwear.jpg";
import accessories from "@/assets/cat-accessories.jpg";

const CATS = [
  { c: "women", label: "Women", image: women, span: "md:col-span-2 md:row-span-2" },
  { c: "men", label: "Men", image: men, span: "" },
  { c: "footwear", label: "Footwear", image: footwear, span: "" },
  { c: "accessories", label: "Accessories", image: accessories, span: "md:col-span-2" },
] as const;

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
      <div className="mb-12 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-gold">The House</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] text-ivory md:text-6xl">
            Four pillars,<br />one wardrobe.
          </h2>
        </div>
        <Link
          to="/shop"
          className="hidden items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-ivory md:inline-flex"
        >
          View all <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid auto-rows-[280px] grid-cols-2 gap-3 md:auto-rows-[320px] md:grid-cols-4 md:gap-4">
        {CATS.map((cat) => (
          <Link
            key={cat.c}
            to="/shop"
            search={{ c: cat.c }}
            className={`group relative overflow-hidden ${cat.span}`}
          >
            <img
              src={cat.image}
              alt={cat.label}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-7">
              <h3 className="font-display text-2xl text-ivory md:text-3xl">{cat.label}</h3>
              <ArrowUpRight className="h-5 w-5 text-ivory transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}