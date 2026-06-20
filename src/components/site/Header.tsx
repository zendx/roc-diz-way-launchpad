import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { useCart } from "@/lib/cart";

const NAV = [
  { to: "/shop", label: "Shop", search: undefined as undefined | { c?: string } },
  { to: "/shop", label: "Men", search: { c: "men" } },
  { to: "/shop", label: "Women", search: { c: "women" } },
  { to: "/shop", label: "Footwear", search: { c: "footwear" } },
  { to: "/shop", label: "Accessories", search: { c: "accessories" } },
  { to: "/about", label: "Atelier", search: undefined },
] as const;

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-6 px-5 md:h-20 md:px-10">
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="flex items-center gap-2 mr-4">
          <Logo className="h-6 md:h-7" />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
          {NAV.map((n, i) => (
            <Link
              key={i}
              to={n.to}
              search={n.search as never}
              className="transition-colors hover:text-ivory"
              activeProps={{ className: "text-ivory" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4 text-foreground">
          <button aria-label="Search" className="hidden sm:inline-flex hover:text-gold transition-colors">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button aria-label="Account" className="hidden sm:inline-flex hover:text-gold transition-colors">
            <User className="h-[18px] w-[18px]" />
          </button>
          <Link to="/cart" className="relative hover:text-gold transition-colors" aria-label="Cart">
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[10px] font-medium text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex h-16 items-center justify-between px-5">
            <Logo className="h-6" />
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 pt-6 text-2xl font-display">
            {NAV.map((n, i) => (
              <Link
                key={i}
                to={n.to}
                search={n.search as never}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}