import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS } from "@/lib/products";

const search = z.object({
  c: z.enum(["men", "women", "footwear", "accessories"]).optional(),
  sort: z.enum(["new", "price-asc", "price-desc"]).optional(),
});

export const Route = createFileRoute("/shop")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Shop — Roc Diz Way" },
      { name: "description", content: "Atelier 01, Noir Series and Foundations. Shop the full Roc Diz Way collection." },
      { property: "og:title", content: "Shop — Roc Diz Way" },
      { property: "og:description", content: "The complete Roc Diz Way wardrobe — outerwear, tailoring, footwear, accessories." },
    ],
  }),
  component: Shop,
});

const FILTERS = [
  { c: undefined, label: "All" },
  { c: "women" as const, label: "Women" },
  { c: "men" as const, label: "Men" },
  { c: "footwear" as const, label: "Footwear" },
  { c: "accessories" as const, label: "Accessories" },
];

function Shop() {
  const { c, sort } = Route.useSearch();
  let items = c ? PRODUCTS.filter((p) => p.category === c) : PRODUCTS;
  if (sort === "price-asc") items = [...items].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") items = [...items].sort((a, b) => b.price - a.price);

  return (
    <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-12 md:px-10 md:pt-16">
      <div className="mb-10 border-b border-border pb-10">
        <p className="text-xs uppercase tracking-[0.32em] text-gold">Collection</p>
        <h1 className="mt-3 font-display text-5xl text-ivory md:text-7xl">
          {c ? FILTERS.find(f => f.c === c)?.label : "All Pieces"}
        </h1>
        <p className="mt-4 max-w-xl text-sm text-muted-foreground">
          A curated edit of {items.length} pieces — every garment hand-finished in our partner ateliers.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = (c ?? undefined) === f.c;
            return (
              <Link
                key={f.label}
                to="/shop"
                search={f.c ? { c: f.c, sort } : { sort }}
                className={`border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                  active
                    ? "border-gold bg-gold text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-ivory hover:text-ivory"
                }`}
              >
                {f.label}
              </Link>
            );
          })}
        </div>
        <select
          value={sort ?? "new"}
          onChange={(e) => {
            const v = e.target.value as "new" | "price-asc" | "price-desc";
            const url = new URL(window.location.href);
            if (v === "new") url.searchParams.delete("sort"); else url.searchParams.set("sort", v);
            window.history.replaceState({}, "", url);
            window.location.assign(url.toString());
          }}
          className="border border-border bg-transparent px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <option value="new">Newest</option>
          <option value="price-asc">Price · Low to High</option>
          <option value="price-desc">Price · High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {items.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}