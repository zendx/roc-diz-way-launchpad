import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Atelier — Roc Diz Way" },
      { name: "description", content: "Designed in Paris. Made across Italy, France and Portugal. The Roc Diz Way philosophy." },
      { property: "og:title", content: "The Atelier — Roc Diz Way" },
      { property: "og:description", content: "A maison built on craft, restraint and longevity." },
      { property: "og:image", content: hero2 },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <img src={hero2} alt="The Atelier" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/40" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-24">
            <p className="text-xs uppercase tracking-[0.32em] text-gold">The House</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] text-ivory md:text-7xl">
              A maison of quiet luxury.
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] gap-12 px-5 py-24 md:grid-cols-[1fr_1.4fr] md:gap-20 md:px-10 md:py-32">
        <h2 className="font-display text-3xl text-ivory md:text-4xl">Designed in Paris.<br />Made by hand.</h2>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Roc Diz Way was founded on a simple idea: that a wardrobe should be small, considered, and made
            to outlast its season. Every piece begins as a sketch in our Paris studio and ends in the hands
            of master craftspeople — leatherworkers in Florence, weavers in Biella, tailors in Porto.
          </p>
          <p>
            We work in two collections a year. We refuse trend cycles. We choose mills certified for ethical
            wool, traceable cotton, and chrome-free leather, and we pay our partner ateliers their full quote.
          </p>
          <p>
            What you wear should mean something. That is the Roc Diz Way.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-[1440px] gap-0 px-5 py-20 md:grid-cols-3 md:gap-px md:px-10">
          <Pillar n="01" title="Material" body="Italian wool, French silk, full-grain leather. Sourced from mills with three generations of trust." />
          <Pillar n="02" title="Craft" body="Hand-finished in small ateliers across Europe. Every garment passes through a single artisan." />
          <Pillar n="03" title="Time" body="We design slowly. Two collections a year, no markdowns, no waste." />
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <img src={hero3} alt="Atelier detail" className="aspect-[4/5] w-full object-cover" />
          <div className="flex items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-gold">Concierge</p>
              <h2 className="mt-4 font-display text-4xl text-ivory md:text-5xl">By appointment.</h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Our concierge offers private styling, made-to-measure consultations, and global delivery
                in 48 hours. Available in Paris, Milano and New York — or remotely, anywhere.
              </p>
              <Link to="/shop" className="mt-8 inline-flex items-center gap-3 border border-ivory bg-ivory px-7 py-4 text-xs uppercase tracking-[0.22em] text-background hover:bg-gold hover:border-gold">
                Begin your wardrobe <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Pillar({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="bg-background p-10 md:p-14">
      <div className="text-xs uppercase tracking-[0.32em] text-gold">{n}</div>
      <h3 className="mt-6 font-display text-2xl text-ivory md:text-3xl">{title}</h3>
      <p className="mt-4 text-muted-foreground">{body}</p>
    </div>
  );
}
