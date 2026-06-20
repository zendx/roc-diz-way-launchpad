import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const SLIDES = [
  {
    image: hero1,
    eyebrow: "Atelier 01 — F/W 26",
    title: "Built in Shadow.",
    body: "A foundational collection of obsidian outerwear, sculpted in Italian wool and cut for movement.",
    cta: "Discover the collection",
    to: "/shop",
    search: undefined as undefined | { c?: string },
  },
  {
    image: hero2,
    eyebrow: "Noir Series",
    title: "Quiet Authority.",
    body: "Tailored ivory contrasts deep obsidian. A study in restraint, finished entirely by hand.",
    cta: "View tailoring",
    to: "/shop",
    search: { c: "women" },
  },
  {
    image: hero3,
    eyebrow: "Foundations",
    title: "Of Gold Thread.",
    body: "The building blocks of a considered wardrobe — finished with our signature gold detailing.",
    cta: "Shop foundations",
    to: "/shop",
    search: { c: "men" },
  },
];

export function Hero() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, duration: 40 });
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setI(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    const id = setInterval(() => embla.scrollNext(), 6500);
    return () => { embla.off("select", onSelect); clearInterval(id); };
  }, [embla]);

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((s, idx) => (
            <div key={idx} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-[88vh] min-h-[640px] w-full">
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading={idx === 0 ? "eager" : "lazy"}
                  fetchPriority={idx === 0 ? "high" : "auto"}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-background/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="relative z-10 flex h-full items-end md:items-center">
                  <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-0">
                    <div className="max-w-xl fade-up">
                      <p className="text-xs uppercase tracking-[0.32em] text-gold">{s.eyebrow}</p>
                      <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight text-ivory md:text-7xl">
                        {s.title}
                      </h1>
                      <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                        {s.body}
                      </p>
                      <div className="mt-8 flex items-center gap-4">
                        <Link
                          to={s.to}
                          search={s.search as never}
                          className="group inline-flex items-center gap-3 border border-ivory bg-ivory px-7 py-4 text-xs uppercase tracking-[0.22em] text-background transition-colors hover:bg-gold hover:border-gold"
                        >
                          {s.cta}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => embla?.scrollTo(idx)}
            aria-label={`Slide ${idx + 1}`}
            className="group h-px w-10 bg-ivory/30"
          >
            <span
              className={`block h-px transition-all duration-500 ${
                i === idx ? "w-full bg-gold" : "w-0 bg-gold"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}