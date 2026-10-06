"use client";

import { categories } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { OptimizedImage } from "@/components/optimized-image";
import { useEffect, useState } from "react";

const previewCount = 9;

export function CategoryGrid() {
  const [expanded, setExpanded] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const hidden = categories.length - previewCount;

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const apply = () => setDesktop(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    <>
      <ul id="products-grid" className="mt-8 grid grid-cols-3 gap-x-2.5 gap-y-[18px] md:mt-12 md:grid-cols-3 md:gap-x-4 md:gap-y-8 lg:grid-cols-6">
        {categories.map((item, index) => {
          const collapsed = !expanded && index >= previewCount;
          if (collapsed && !desktop) {
            return null;
          }
          return (
            <li
              key={item.name}
              className={`category-tile text-left ${collapsed ? "hidden md:block" : ""} ${expanded && index >= previewCount ? "tile-in" : ""}`}
            >
              <Reveal delay={Math.min(index, 8) * 45}>
                <div className="overflow-hidden rounded-[12px] md:rounded-[28px]">
                  <OptimizedImage
                    src={item.src}
                    alt=""
                    width={379}
                    height={379}
                    sizes="(min-width: 1024px) 15vw, (min-width: 768px) 30vw, 30vw"
                    className="reveal-media aspect-square h-auto w-full object-cover"
                  />
                </div>
                <p className="mt-2 text-[13px] leading-snug font-semibold text-ink md:mt-3 md:text-sm md:font-medium">{item.name}</p>
              </Reveal>
            </li>
          );
        })}
        <li className="category-tile hidden text-left md:block">
          <Reveal delay={360}>
            <div className="aspect-square w-full flex items-center justify-start pl-2 rounded-[28px] border border-dashed border-muted bg-foam">
              <p className="px-3 text-left font-mono text-xs tracking-[0.14em] text-leaf uppercase">Coming next</p>
            </div>
            <p className="mt-3 text-sm font-medium text-muted">Fresh produce</p>
          </Reveal>
        </li>
      </ul>

      {expanded ? null : (
        <button
          type="button"
          className="mt-6 inline-flex min-h-[53px] w-full items-center justify-center gap-2.5 rounded-full border-[1.5px] border-ink px-5 text-[15px] font-semibold text-ink md:hidden"
          onClick={() => setExpanded(true)}
        >
          Show all {categories.length} categories
          <span className="rounded-full bg-[#c9e3ce] px-2 py-0.5 text-[12px] font-medium tracking-[0.12em] text-ink">+{hidden}</span>
        </button>
      )}
      <p className="mt-3.5 text-center font-mono text-[11px] tracking-[0.14em] text-leaf uppercase md:hidden">
        Coming next — fresh produce
      </p>
    </>
  );
}
