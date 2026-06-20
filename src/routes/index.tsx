import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roc Diz Way — Quiet Luxury, By Design" },
      { name: "description", content: "Atelier 01 and the Noir Series. A wardrobe of considered pieces — designed in Paris, made across Italy, France and Portugal." },
      { property: "og:title", content: "Roc Diz Way — Quiet Luxury, By Design" },
      { property: "og:description", content: "Sculpted in obsidian and gold. Discover the F/W 26 collection." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = PRODUCTS.slice(0, 4);
  const editorial = PRODUCTS.slice(4, 8);
  return (
    <>
      <Hero />

      <Marquee />

      {/* Featured */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-gold">Atelier 01</p>
            <h2 className="mt-3 font-display text-4xl text-ivory md:text-6xl">The new icons.</h2>
          </div>
          <Link to="/shop" className="hidden items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-ivory md:inline-flex">
            See everything <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <CategoryGrid />

      {/* Editorial split */}
      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 md:grid-cols-2 md:gap-16 md:px-10 md:py-32">
        <div className="flex items-center">
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-[0.32em] text-gold">Manifesto</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] text-ivory md:text-5xl">
              Less, but exceptional.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We design slowly. Every Roc Diz Way piece is built around longevity — chosen mills, certified
              fibres, hand-finishing in small ateliers from Florence to Porto. We don&apos;t do seasons.
              We build a wardrobe that gets better with time.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 border border-border px-6 py-3 text-xs uppercase tracking-[0.22em] text-ivory hover:border-gold hover:text-gold"
            >
              The Atelier <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {editorial.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-y border-border">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.32em] text-gold">The Cabinet</p>
            <h2 className="mt-4 font-display text-3xl text-ivory md:text-5xl">
              Private invitations, first looks.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join the cabinet for collection previews, atelier dispatches and select releases.
            </p>
            <form
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).reset(); }}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 border border-border bg-transparent px-5 py-4 text-sm text-ivory placeholder:text-muted-foreground focus:border-gold focus:outline-none"
              />
              <button className="border border-ivory bg-ivory px-7 py-4 text-xs uppercase tracking-[0.22em] text-background transition-colors hover:bg-gold hover:border-gold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Marquee() {
  const items = ["Free Express Worldwide", "Complimentary Returns", "Hand-Finished in Italy", "Concierge by Appointment"];
  return (
    <div className="overflow-hidden border-y border-border bg-[oklch(0.05_0_0)] py-4">
      <div className="marquee flex w-max items-center gap-16 whitespace-nowrap text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-16">
            <span>{it}</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
