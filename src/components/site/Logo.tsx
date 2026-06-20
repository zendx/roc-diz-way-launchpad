import logoInkSrc from "@/assets/roc-diz-way-logo-refined-ink.png";
import logoIvorySrc from "@/assets/roc-diz-way-logo-refined.png";

export function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <>
      <img
        src={logoInkSrc}
        alt="Roc Diz Way"
        className={`${className} dark:hidden`}
        width={2389}
        height={375}
        style={{ width: "auto" }}
      />
      <img
        src={logoIvorySrc}
        alt="Roc Diz Way"
        className={`${className} hidden dark:block`}
        width={2389}
        height={375}
        style={{ width: "auto" }}
      />
    </>
  );
}

export function Monogram({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        <path d="M16 52 V14 H38 a10 10 0 0 1 0 20 H22" />
        <path d="M22 34 L42 52" />
        <path d="M22 52 L32 30 L42 52" />
      </g>
    </svg>
  );
}
