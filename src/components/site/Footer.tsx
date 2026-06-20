import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-card">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-7" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A maison of quiet luxury. Roc Diz Way builds a wardrobe of considered pieces — designed in
              Paris, made across Italy, France and Portugal.
            </p>
            <div className="gold-rule mt-6 w-32" />
          </div>
          <FooterCol title="Shop" links={[
            { to: "/shop", label: "All", search: undefined },
            { to: "/shop", label: "Men", search: { c: "men" } },
            { to: "/shop", label: "Women", search: { c: "women" } },
            { to: "/shop", label: "Footwear", search: { c: "footwear" } },
            { to: "/shop", label: "Accessories", search: { c: "accessories" } },
          ]} />
          <FooterCol title="House" links={[
            { to: "/about", label: "The Atelier", search: undefined },
            { to: "/about", label: "Craftsmanship", search: undefined },
            { to: "/about", label: "Sustainability", search: undefined },
            { to: "/about", label: "Press", search: undefined },
          ]} />
          <FooterCol title="Service" links={[
            { to: "/about", label: "Concierge", search: undefined },
            { to: "/about", label: "Shipping", search: undefined },
            { to: "/about", label: "Returns", search: undefined },
            { to: "/about", label: "Contact", search: undefined },
          ]} />
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Roc Diz Way. All rights reserved.</span>
          <span>Paris · Milano · New York</span>
        </div>
      </div>
    </footer>
  );
}

type LinkItem = { to: string; label: string; search: { c?: string } | undefined };

function FooterCol({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div>
      <h4 className="mb-5 text-xs uppercase tracking-[0.22em] text-gold">{title}</h4>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {links.map((l, i) => (
          <li key={i}>
            <Link
              to={l.to}
              search={l.search as never}
              className="transition-colors hover:text-ivory"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
