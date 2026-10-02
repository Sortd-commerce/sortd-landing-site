"use client";

import { CheckMark, CrossMark } from "@/components/marks";
import { comparisons } from "@/lib/content";
import Image from "next/image";
import { useRef, useState } from "react";

export function CompareViewer() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function goTo(next: number) {
    const scroller = scrollerRef.current;
    const slide = scroller?.querySelectorAll<HTMLElement>("[data-compare]")[next];
    if (!scroller || !slide) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const left = slide.getBoundingClientRect().left - scroller.getBoundingClientRect().left + scroller.scrollLeft;
    scroller.scrollTo({ left, behavior: reduce ? "auto" : "smooth" });
    setIndex(next);
    tabsRef.current?.querySelectorAll<HTMLElement>("[data-tab]")[next]?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  function onScroll() {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const slides = [...scroller.querySelectorAll<HTMLElement>("[data-compare]")];
    const mid = scroller.scrollLeft + scroller.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    slides.forEach((slide, i) => {
      const center = slide.getBoundingClientRect().left - scroller.getBoundingClientRect().left + scroller.scrollLeft + slide.clientWidth / 2;
      const dist = Math.abs(center - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setIndex(best);
  }

  return (
    <div className="mt-7 md:hidden">
      <div ref={tabsRef} className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5" role="tablist" aria-label="Comparisons">
        {comparisons.map((item, i) => {
          const selected = i === index;
          return (
            <button
              key={item.name}
              type="button"
              role="tab"
              data-tab=""
              aria-selected={selected}
              className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold ${
                selected ? "bg-ink text-white" : "border-[1.5px] border-hairline text-ink"
              }`}
              onClick={() => goTo(i)}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="no-scrollbar mt-4 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto"
        aria-live="polite"
      >
        {comparisons.map((item, i) => (
          <article
            key={item.name}
            data-compare=""
            className="flex w-full shrink-0 snap-start flex-col overflow-hidden rounded-[20px] bg-tint"
            aria-hidden={i === index ? undefined : true}
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.src.replace(".svg", "-wash.jpg")}
                alt=""
                width={929}
                height={1019}
                sizes="100vw"
                className="h-auto w-full"
              />
              <div className="absolute inset-x-3 top-3 flex items-start justify-between">
                <p className="rounded-full bg-ink px-2.5 py-1.5 font-mono text-[11px] tracking-[0.14em] text-white">SORTD PICK</p>
                <p className="rounded-full bg-white px-2.5 py-1.5 font-mono text-[11px] tracking-[0.14em] text-flag">TYPICAL SHELF</p>
              </div>
            </div>
            <div className="grid flex-1 grid-cols-2 content-start px-4 pt-4 pb-5">
              <ul className="space-y-3 pr-3">
                {item.pass.map((line) => (
                  <li key={line} className="flex gap-2 text-[13px] leading-[1.35] text-ink">
                    <CheckMark className="mt-0.5 size-3 shrink-0 text-leaf" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3 border-l border-ink/20 pl-3">
                {item.fail.map((line) => (
                  <li key={line} className="flex gap-2 text-[13px] leading-[1.35] text-ink">
                    <CrossMark className="mt-1 size-2.5 shrink-0 text-flag" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5" aria-hidden="true">
        {comparisons.map((item, i) => (
          <span key={item.name} className={`h-1.5 rounded-full ${i === index ? "w-[22px] bg-ink" : "size-1.5 bg-hairline"}`} />
        ))}
      </div>
    </div>
  );
}
