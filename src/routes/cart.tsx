import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, X, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart, fmt } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Bag — Roc Diz Way" },
      { name: "description", content: "Review the pieces in your bag." },
    ],
  }),
  component: Cart,
});

function Cart() {
  const { items, remove, setQty, total, clear } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-32 text-center md:px-10">
        <ShoppingBag className="mx-auto h-8 w-8 text-gold" />
        <h1 className="mt-6 font-display text-4xl text-ivory md:text-5xl">Your bag is empty</h1>
        <p className="mt-4 text-muted-foreground">Begin with a piece from the new collection.</p>
        <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border border-ivory bg-ivory px-7 py-4 text-xs uppercase tracking-[0.22em] text-background hover:bg-gold hover:border-gold">
          Discover the collection <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const shipping = total > 500 ? 0 : 25;

  return (
    <div className="mx-auto max-w-[1280px] px-5 pb-24 pt-12 md:px-10">
      <div className="mb-10 flex items-end justify-between border-b border-border pb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-gold">Bag</p>
          <h1 className="mt-3 font-display text-4xl text-ivory md:text-6xl">Your selection</h1>
        </div>
        <button onClick={clear} className="text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-ivory">Clear bag</button>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <ul className="divide-y divide-border">
          {items.map((it) => (
            <li key={it.id + it.size} className="flex gap-5 py-6">
              <div className="aspect-[4/5] w-28 flex-shrink-0 overflow-hidden bg-muted md:w-36">
                <img src={it.image} alt={it.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg text-ivory">{it.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">Size {it.size}</p>
                  </div>
                  <button onClick={() => remove(it.id, it.size)} aria-label="Remove" className="text-muted-foreground hover:text-ivory">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-auto flex items-end justify-between pt-4">
                  <div className="flex items-center border border-border">
                    <button onClick={() => setQty(it.id, it.size, it.qty - 1)} className="grid h-9 w-9 place-items-center hover:text-gold"><Minus className="h-3 w-3" /></button>
                    <span className="w-8 text-center text-sm">{it.qty}</span>
                    <button onClick={() => setQty(it.id, it.size, it.qty + 1)} className="grid h-9 w-9 place-items-center hover:text-gold"><Plus className="h-3 w-3" /></button>
                  </div>
                  <span className="text-sm text-ivory">{fmt(it.price * it.qty)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit border border-border p-6 md:p-8">
          <h2 className="text-xs uppercase tracking-[0.22em] text-gold">Order summary</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <Row label="Subtotal" value={fmt(total)} />
            <Row label="Shipping" value={shipping === 0 ? "Complimentary" : fmt(shipping)} />
            <Row label="Estimated tax" value="At checkout" muted />
          </dl>
          <div className="my-6 gold-rule" />
          <dl className="flex items-center justify-between text-base text-ivory">
            <dt>Total</dt>
            <dd className="font-display text-xl">{fmt(total + shipping)}</dd>
          </dl>
          <button className="mt-8 inline-flex w-full items-center justify-center gap-3 border border-ivory bg-ivory px-7 py-4 text-xs uppercase tracking-[0.22em] text-background hover:bg-gold hover:border-gold">
            Secure checkout <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Complimentary express shipping on orders over $500.
          </p>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className={muted ? "text-muted-foreground" : "text-ivory"}>{value}</dd>
    </div>
  );
}