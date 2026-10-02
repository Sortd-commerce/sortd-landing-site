"use client";

import { pillars } from "@/lib/content";
import Image from "next/image";
import { useRef, useState } from "react";

export function PillarRail() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function onScroll() {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const cards = [...scroller.querySelectorAll<HTMLElement>("[data-pillar]")];
    const mid = scroller.getBoundingClientRect().left + scroller.clientWidth * 0.35;
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((card, i) => {
      const box = card.getBoundingClientRect();
      const dist = Math.abs(box.left + box.width / 2 - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setIndex(best);
  }

  return (
    <div className="mt-8 md:hidden">
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-pl-8 gap-3 overflow-x-auto pr-5 pl-8"
        aria-label="Why we exist"
      >
        {pillars.map((card) => (
          <a
            key={card.src}
            href={card.href}
            data-pillar=""
            className="relative h-[440px] w-[300px] shrink-0 snap-start overflow-hidden rounded-[20px]"
          >
            <Image
              src={card.src}
              alt=""
              fill
              unoptimized
              sizes="300px"
              className="object-cover object-[72%_center]"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[300px] bg-[linear-gradient(to_bottom,rgba(13,36,3,0.78),rgba(13,36,3,0))]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[150px] bg-[linear-gradient(to_bottom,rgba(13,36,3,0),rgba(13,36,3,0.72))]" />
            <div className="absolute inset-x-5 top-6 text-center text-cream">
              <p className="font-lora text-[24px] leading-none italic">{card.kicker}</p>
              <p className="mt-1.5 font-serif text-[26px] leading-[1.05] font-bold tracking-[-0.012em]">{card.title}</p>
              <p className="mt-3.5 text-[14px] leading-[1.6]">{card.body}</p>
            </div>
            <p className="absolute bottom-6 left-5 text-[16px] font-semibold text-cream">
              {card.cta}
              <span aria-hidden="true"> →</span>
            </p>
            <span className="sr-only">{card.alt}</span>
          </a>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between pl-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {pillars.map((card, i) => (
            <span
              key={card.src}
              className={`h-1.5 rounded-full ${i === index ? "w-7 bg-ink" : "w-2 bg-hairline"}`}
            />
          ))}
        </div>
        <p className="font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
          {String(index + 1).padStart(2, "0")} / 03
          <span aria-hidden="true"> → swipe</span>
        </p>
      </div>
    </div>
  );
}
