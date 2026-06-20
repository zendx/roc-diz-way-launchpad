import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, ShoppingBag, ArrowRight, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import { getProduct, PRODUCTS } from "@/lib/products";
import { useCart, fmt } from "@/lib/cart";
import { ProductCard } from "@/components/site/ProductCard";
import { toast } from "sonner";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Roc Diz Way` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: `${loaderData.product.name} — Roc Diz Way` },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-32 text-center md:px-10">
      <h1 className="font-display text-4xl text-ivory">Piece not found</h1>
      <Link to="/shop" className="mt-6 inline-block text-gold underline-offset-4 hover:underline">
        Return to the collection
      </Link>
    </div>
  ),
});

const SIZES = ["XS", "S", "M", "L", "XL"];

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);

  const related = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <div>
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 pt-8 md:grid-cols-2 md:gap-16 md:px-10 md:pt-12">
        <div className="aspect-[4/5] overflow-hidden bg-muted md:sticky md:top-24 md:self-start">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div className="py-2 md:py-12">
          <p className="text-xs uppercase tracking-[0.32em] text-gold">{product.collection}</p>
          <h1 className="mt-4 font-display text-4xl text-ivory md:text-5xl">{product.name}</h1>
          <p className="mt-4 text-2xl text-ivory">{fmt(product.price)}</p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="mt-10">
            <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em]">
              <span className="text-ivory">Size</span>
              <span className="text-muted-foreground">Size guide</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-14 border px-4 py-3 text-sm transition-colors ${
                    size === s
                      ? "border-ivory bg-ivory text-background"
                      : "border-border text-ivory hover:border-ivory"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-border">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="grid h-12 w-12 place-items-center hover:text-gold">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center text-sm">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="grid h-12 w-12 place-items-center hover:text-gold">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={() => {
                add({ id: product.id, name: product.name, price: product.price, image: product.image, size }, qty);
                toast.success(`${product.name} added`, { description: `Size ${size} · Qty ${qty}` });
              }}
              className="group inline-flex flex-1 items-center justify-center gap-3 border border-ivory bg-ivory px-7 py-4 text-xs uppercase tracking-[0.22em] text-background transition-colors hover:bg-gold hover:border-gold"
            >
              <ShoppingBag className="h-4 w-4" /> Add to bag
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-y border-border py-6 text-xs">
            <Perk icon={<Truck className="h-4 w-4" />} label="Express shipping" />
            <Perk icon={<RefreshCw className="h-4 w-4" />} label="30-day returns" />
            <Perk icon={<ShieldCheck className="h-4 w-4" />} label="Authenticated" />
          </div>

          <div className="mt-10">
            <h2 className="text-xs uppercase tracking-[0.22em] text-gold">Atelier notes</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {product.details.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-4 bg-gold" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-3xl text-ivory md:text-5xl">You may also like</h2>
            <Link to="/shop" className="hidden items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-ivory md:inline-flex">
              All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}

function Perk({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center text-muted-foreground">
      <span className="text-gold">{icon}</span>
      <span className="uppercase tracking-[0.18em]">{label}</span>
    </div>
  );
}