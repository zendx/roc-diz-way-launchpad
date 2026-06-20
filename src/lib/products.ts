import hoodie from "@/assets/p-hoodie.jpg";
import coat from "@/assets/p-coat.jpg";
import dress from "@/assets/p-dress.jpg";
import sneaker from "@/assets/p-sneaker.jpg";
import tee from "@/assets/p-tee.jpg";
import watch from "@/assets/p-watch.jpg";
import bag from "@/assets/p-bag.jpg";
import trouser from "@/assets/p-trouser.jpg";

export type Product = {
  id: string;
  name: string;
  category: "men" | "women" | "footwear" | "accessories";
  price: number;
  image: string;
  collection: string;
  description: string;
  details: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "obsidian-coat",
    name: "Obsidian Wool Coat",
    category: "women",
    price: 1480,
    image: coat,
    collection: "Atelier 01",
    description:
      "A sculpted single-breasted coat cut from virgin Italian wool. Built for movement, finished by hand.",
    details: ["100% virgin wool", "Cupro lining", "Made in Italy", "Hand-finished"],
  },
  {
    id: "monolith-hoodie",
    name: "Monolith Heavyweight Hoodie",
    category: "men",
    price: 320,
    image: hoodie,
    collection: "Atelier 01",
    description:
      "A 580gsm loopback hoodie with gold-thread monogram. Garment-dyed for depth.",
    details: ["580gsm loopback cotton", "Garment dyed", "Gold thread monogram", "Made in Portugal"],
  },
  {
    id: "ivoire-slip",
    name: "Ivoire Silk Slip",
    category: "women",
    price: 690,
    image: dress,
    collection: "Noir Series",
    description:
      "Bias-cut silk charmeuse in ivoire. Liquid drape, weightless against skin.",
    details: ["100% silk charmeuse", "Bias cut", "Hand-rolled hem", "Made in France"],
  },
  {
    id: "way-runner",
    name: "Way Runner Low",
    category: "footwear",
    price: 540,
    image: sneaker,
    collection: "Atelier 01",
    description:
      "Full-grain calfskin sneaker with brass eyelets and a sculpted obsidian sole.",
    details: ["Full-grain calfskin", "Brass eyelets", "Margom sole", "Made in Italy"],
  },
  {
    id: "core-tee",
    name: "Core Oversized Tee",
    category: "men",
    price: 140,
    image: tee,
    collection: "Foundations",
    description:
      "Boxy 280gsm Supima tee with a discreet gold emblem. Designed to layer.",
    details: ["280gsm Supima cotton", "Boxy fit", "Reinforced shoulders", "Made in Portugal"],
  },
  {
    id: "horizon-watch",
    name: "Horizon Chronograph",
    category: "accessories",
    price: 2450,
    image: watch,
    collection: "Noir Series",
    description:
      "Swiss automatic movement, gold-PVD case, sapphire crystal. Timeless.",
    details: ["Swiss automatic", "Gold-PVD steel", "Sapphire crystal", "100m water resistance"],
  },
  {
    id: "diz-tote",
    name: "Diz Structured Tote",
    category: "accessories",
    price: 1290,
    image: bag,
    collection: "Noir Series",
    description:
      "Hand-saddled grain leather with brass turn-lock. A wardrobe constant.",
    details: ["Grain leather", "Brass hardware", "Suede lining", "Made in Florence"],
  },
  {
    id: "atlas-trouser",
    name: "Atlas Pleated Trouser",
    category: "men",
    price: 460,
    image: trouser,
    collection: "Atelier 01",
    description:
      "High-waisted, double-pleated wool trouser with a clean tapered leg.",
    details: ["Italian wool twill", "Double pleat", "Half lined", "Made in Italy"],
  },
];

export function getProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}