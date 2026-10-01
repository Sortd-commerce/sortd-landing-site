"use client";

import { bans } from "@/lib/content";
import Image from "next/image";
import { useRef, useState } from "react";

export function Bans() {
  const [active, setActive] = useState(bans[0].id);
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollToCard(id: string) {
    setActive(id);
    const scroller = scrollerRef.current;
    const card = document.getElementById(`ban-${id}`);
    if (!scroller || !card) return;
    const left = card.offsetLeft - (scroller.clientWidth - card.clientWidth) / 2;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scroller.scrollTo({ left, behavior: reduce ? "auto" : "smooth" });
  }

  function step(direction: -1 | 1) {
    const index = bans.findIndex((ban) => ban.id === active);
    const next = bans[(index + direction + bans.length) % bans.length];
    scrollToCard(next.id);
  }

  return (
    <section id="bans" className="bg-ink py-20 text-white md:py-28" aria-labelledby="bans-title">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 id="bans-title" className="max-w-xl font-serif text-4xl leading-[1.02] font-medium tracking-tight text-white md:text-[4rem]">
          What we ban, and why.
        </h2>
        <p className="mt-5 max-w-md text-base leading-relaxed text-[#e7f0de]">
          Every ingredient is reviewed for what it is, what it&apos;s there for, and whether it belongs.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <div className="flex min-w-0 flex-1 flex-wrap gap-2" role="group" aria-label="Banned ingredient groups">
            {bans.map((ban) => {
              const selected = active === ban.id;
              return (
                <button
                  key={ban.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => scrollToCard(ban.id)}
                  className={`min-h-11 rounded-full border px-4 text-sm transition-colors ${
                    selected ? "border-white bg-white text-ink" : "border-white/50 text-white hover:border-white"
                  }`}
                >
                  {ban.label}
                </button>
              );
            })}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-white/50 text-white hover:border-white"
              onClick={() => step(-1)}
            >
              <span className="sr-only">Previous banned ingredient</span>
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-white/50 text-white hover:border-white"
              onClick={() => step(1)}
            >
              <span className="sr-only">Next banned ingredient</span>
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        id="ban-scroller"
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:px-8"
        tabIndex={0}
        aria-label="Ingredient cards"
      >
        {bans.map((ban) => (
          <article
            key={ban.id}
            id={`ban-${ban.id}`}
            className="w-[min(78vw,22.5rem)] shrink-0 snap-center"
            aria-current={active === ban.id ? "true" : undefined}
          >
            <Image
              src={ban.src}
              alt={ban.alt}
              width={720}
              height={1044}
              sizes="(min-width: 768px) 340px, 78vw"
              className="h-auto w-full rounded-[28px]"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
