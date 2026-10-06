type BrandMarkProps = {
  href?: string | null;
  tone?: "ink" | "cream";
  size?: "sm" | "md" | "lg";
  className?: string;
  id?: string;
};

const sizeClass = {
  sm: "text-[22px] md:text-[26px]",
  md: "text-[30px] md:text-[32px]",
  lg: "text-[30px]",
} as const;

export function BrandMark({
  href = "/",
  tone = "ink",
  size = "md",
  className = "",
  id,
}: BrandMarkProps) {
  const classes = [
    "brand-mark",
    tone === "cream" ? "brand-mark-cream" : "brand-mark-ink",
    sizeClass[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const word = (
    <>
      Sortd<span className="brand-period">.</span>
    </>
  );

  if (!href) {
    return (
      <span id={id} className={classes}>
        {word}
      </span>
    );
  }

  return (
    <a id={id} href={href} className={classes} aria-label="Sortd home">
      {word}
    </a>
  );
}
