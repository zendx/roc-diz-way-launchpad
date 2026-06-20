import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { fmt } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted product-zoom">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute left-3 top-3 text-[10px] uppercase tracking-[0.2em] text-gold">
          {product.collection}
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-base text-ivory transition-colors group-hover:text-gold">
            {product.name}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {product.category}
          </p>
        </div>
        <span className="text-sm text-ivory">{fmt(product.price)}</span>
      </div>
    </Link>
  );
}