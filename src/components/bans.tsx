"use client";

import { bans } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { useFinePointer, usePrefersReducedMotion } from "@/components/use-prefers-reduced-motion";
import { OptimizedImage } from "@/components/optimized-image";
import { useRef, useState } from "react";

export function Bans() {
  const [active, setActive] = useState(bans[0].id);
  const [hovered, setHovered] = useState<number | null>(null);
  const reduce = usePrefersReducedMotion();
  const finePointer = useFinePointer();
  const allowFocus = finePointer && reduce === false;
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollToCard(id: string) {
    setActive(id);
    const scroller = scrollerRef.current;
    const card = document.getElementById(`ban-${id}`);
    if (!scroller || !card) return;
    const left =
      card.getBoundingClientRect().left -
      scroller.getBoundingClientRect().left +
      scroller.scrollLeft -
      (scroller.clientWidth - card.clientWidth) / 2;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scroller.scrollTo({ left, behavior: reduce ? "auto" : "smooth" });
  }

  function step(direction: -1 | 1) {
    const index = bans.findIndex((ban) => ban.id === active);
    const next = bans[(index + direction + bans.length) % bans.length];
    scrollToCard(next.id);
  }

  function onRailScroll() {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const cards = [...scroller.querySelectorAll<HTMLElement>("article")];
    const mid = scroller.getBoundingClientRect().left + scroller.clientWidth / 2;
    let best = bans[0].id;
    let bestDist = Infinity;
    cards.forEach((card) => {
      const box = card.getBoundingClientRect();
      const dist = Math.abs(box.left + box.width / 2 - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = card.id.replace("ban-", "");
      }
    });
    setActive(best);
  }

  const activeIndex = Math.max(0, bans.findIndex((ban) => ban.id === active));

  return (
    <section id="bans" className="bg-ink py-20 text-white md:py-28" aria-labelledby="bans-title">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <Reveal>
          <h2 id="bans-title" className="max-w-xl font-serif text-[42px] leading-[0.94] font-bold tracking-[-0.018em] text-white md:text-[84px] md:leading-[0.92] md:tracking-[-0.02em]">
            What we ban, and why.
          </h2>
          <p className="mt-5 max-w-lg font-archivo-narrow text-[14px] leading-[1.55] font-light font-[400px] md:text-[18px] md:leading-[2.55] text-[#A7D1AE] ">
            Every ingredient is reviewed for what it is, what it’s there for, and whether it belongs.
          </p>
        </Reveal>

        <div className="mt-7 flex items-center gap-2 md:mt-8">
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              className="grid size-9 place-items-center rounded-full border border-white/55 text-white hover:border-white"
              onClick={() => step(-1)}
            >
              <span className="sr-only">Previous banned ingredient</span>
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
            <button
              type="button"
              className="grid size-9 place-items-center rounded-full border border-white/55 text-white hover:border-white"
              onClick={() => step(1)}
            >
              <span className="sr-only">Next banned ingredient</span>
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          id="ban-scroller"
          className="no-scrollbar mt-4 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto py-3 md:mt-5 md:gap-6"
          tabIndex={0}
          aria-label="Ingredient cards"
          onScroll={onRailScroll}
        >
          {bans.map((ban, index) => {
            const dimmed = allowFocus && hovered !== null && hovered !== index;
            return (
            <article
              key={ban.id}
              id={`ban-${ban.id}`}
              style={{ backgroundColor: ban.tint }}
              onMouseEnter={() => {
                if (allowFocus) setHovered(index);
              }}
              onMouseLeave={() => setHovered(null)}
              className={`flex aspect-[400/580] w-[min(78vw,400px)] shrink-0 snap-start flex-col items-start overflow-hidden rounded-[20px] p-0 text-ink transition-all duration-300 ease-out md:aspect-auto md:h-[580px] md:w-[400px] ${
                dimmed ? "scale-95 blur-sm" : ""
              }`}
              aria-current={active === ban.id ? "true" : undefined}
            >
              <Reveal delay={Math.min(index, 4) * 80} className="flex h-full w-full flex-col">
                <OptimizedImage
                  src={ban.src}
                  alt={ban.alt}
                  width={1774}
                  height={887}
                  sizes="400px"
                  className="reveal-media block aspect-[2/1] h-auto w-full object-cover"
                />
                <div className="flex flex-1 flex-col px-7 pt-7 pb-7">
                  <div className="flex items-start gap-2">
                    <p className="pt-1.5 text-[15px] leading-none font-medium text-ink">{ban.n}</p>
                    <h3 className="font-serif text-[32px] leading-none font-bold tracking-[-0.02em] text-ink md:text-[36px]">{ban.title}</h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {ban.chips.map((chip) => (
                      <li
                        key={chip}
                        className="rounded-full border border-ink/10 bg-white/80 px-3 py-1.5 text-[13px] leading-none text-ink"
                      >
                        {chip}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 border-t border-ink/15 pt-3.5">
                    <p className="flex items-center gap-2 text-[15px] leading-none font-semibold text-ink">
                      <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0">
                        <path d="M8 1.8 14.4 13.6H1.6L8 1.8Z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                        <path d="M8 6.3v3.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        <circle cx="8" cy="11.2" r="0.7" fill="currentColor" />
                      </svg>
                      Why
                    </p>
                    <p className="mt-1.5 pl-[23px] text-[15px] leading-snug text-ink">{ban.why}</p>
                  </div>
                  <div className="mt-3.5">
                    <p className="flex items-center gap-2 text-[15px] leading-none font-semibold text-ink">
                      <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
                        <path
                          d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Found in
                    </p>
                    <p className="mt-1.5 pl-[23px] text-[15px] leading-snug text-ink">{ban.found}</p>
                  </div>
                </div>
              </Reveal>
            </article>
            );
          })}
        </div>
        <div className="mt-6 flex items-center gap-4 md:hidden">
          <div className="flex flex-1 gap-1" aria-hidden="true">
            {bans.map((ban, index) => (
              <span key={ban.id} className={`h-[3px] flex-1 rounded-full ${index <= activeIndex ? "bg-white" : "bg-white/25"}`} />
            ))}
          </div>
          <p className="font-mono text-[11px] tracking-[0.14em] text-sand">
            {String(activeIndex + 1).padStart(2, "0")} / {String(bans.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}
