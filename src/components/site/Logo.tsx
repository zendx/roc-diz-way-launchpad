import logoAsset from "@/assets/logo.png.asset.json";

export function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Roc Diz Way"
      className={className}
      width={1920}
      height={1080}
      style={{ width: "auto" }}
    />
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