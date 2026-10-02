"use client";

import { useEffect, useId, useRef, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/#vet", label: "How we vet" },
  { href: "/#bans", label: "What we ban" },
];

const sections = [
  { id: "about", label: "About" },
  { id: "vet", label: "How we vet" },
  { id: "products", label: "Products" },
  { id: "bans", label: "What we ban" },
];

export function SiteHeader({ mobileOnly = false }: { mobileOnly?: boolean }) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [sectionLabel, setSectionLabel] = useState("");
  const [showFloat, setShowFloat] = useState(false);
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastY = useRef(0);
  const settleTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      const delta = y - lastY.current;
      lastY.current = y;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
      setScrolled(y > 24);

      const footer = document.querySelector("footer");
      const overFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight - 12 : false;
      const pastHero = y > 640;
      if (!pastHero || overFooter) {
        setShowFloat(false);
      } else if (delta > 6) {
        setShowFloat(false);
      } else if (delta < -6) {
        setShowFloat(true);
      }
      if (settleTimer.current) window.clearTimeout(settleTimer.current);
      settleTimer.current = window.setTimeout(() => {
        const node = document.querySelector("footer");
        const covering = node ? node.getBoundingClientRect().top < window.innerHeight - 12 : false;
        setShowFloat(window.scrollY > 640 && !covering);
      }, 160);

      const marker = y + 88;
      let active = "";
      for (const section of sections) {
        const node = document.getElementById(section.id);
        if (node && node.offsetTop <= marker) active = section.label;
      }
      setSectionLabel(active);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (settleTimer.current) window.clearTimeout(settleTimer.current);
    };
  }, []);

  function openMenu() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.classList.remove("is-closing");
    dialog.showModal();
    setOpen(true);
  }

  function closeMenu() {
    const dialog = dialogRef.current;
    if (!dialog || !dialog.open) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || dialog.classList.contains("is-closing")) {
      if (reduce) {
        dialog.close();
        setOpen(false);
      }
      return;
    }
    dialog.classList.add("is-closing");
    const finish = (event: AnimationEvent) => {
      if (event.target !== dialog || event.animationName !== "menu-close") return;
      dialog.removeEventListener("animationend", finish);
      dialog.classList.remove("is-closing");
      dialog.close();
      setOpen(false);
    };
    dialog.addEventListener("animationend", finish);
  }

  return (
    <>
      <header
        className={`${mobileOnly ? "lg:hidden " : ""}relative sticky top-0 z-40 border-b backdrop-blur-md transition-[background-color,box-shadow,height] duration-300 ${
          scrolled
            ? "border-ink/15 bg-cream/95 shadow-[0_10px_30px_rgb(20_53_3_/_0.06)] md:bg-sky/95"
            : "border-ink/10 bg-sky/95"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-[height] duration-300 md:h-20 md:px-8 ${
            scrolled ? "h-[52px]" : "h-16"
          }`}
        >
          <a
            href="/"
            className={`font-serif leading-none font-bold tracking-[-0.02em] text-ink transition-[font-size] duration-300 ${
              scrolled ? "text-[22px] md:text-[26px]" : "text-[30px] md:text-[32px]"
            }`}
          >
            Sortd
          </a>

          {scrolled && sectionLabel ? (
            <p className="pointer-events-none absolute left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-ink uppercase md:hidden">
              <span className="size-1.5 rounded-full bg-ink" aria-hidden="true" />
              {sectionLabel}
            </p>
          ) : null}

          <nav className="hidden items-center gap-8 text-[15px] text-body md:flex" aria-label="Primary">
            <a href="/about" className="rounded-full px-1 py-2 hover:text-ink">
              About
            </a>
            <a href="/#products" className="rounded-full px-1 py-2 hover:text-ink">
              Products
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="/#products"
              className={`${
                scrolled ? "hidden md:inline-flex" : "inline-flex"
              } min-h-11 items-center rounded-full bg-ink px-4 text-[15px] leading-[1.4] font-medium text-cream transition-colors hover:bg-panel md:px-5`}
            >
              <span className="md:hidden">Products</span>
              <span className="hidden md:inline">See our Products</span>
            </a>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-ink/20 bg-white/80 text-ink md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-haspopup="dialog"
              onClick={openMenu}
            >
              <span className="sr-only">Open menu</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-ink/10" aria-hidden="true">
          <div
            className="h-full origin-left bg-ink transition-transform duration-150 ease-out"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>

        <dialog
          ref={dialogRef}
          id="mobile-nav"
          className="menu-screen md:hidden"
          aria-labelledby={titleId}
          onClose={() => setOpen(false)}
          onCancel={(event) => {
            event.preventDefault();
            closeMenu();
          }}
        >
          <div className="flex min-h-dvh flex-col px-5 pt-0 pb-8">
            <div className="flex h-16 items-center justify-between">
              <p id={titleId} className="font-serif text-[30px] leading-none font-bold tracking-[-0.02em] text-[#fff2e6]">
                Sortd
              </p>
              <button
                type="button"
                className="grid size-10 place-items-center rounded-full border-[1.5px] border-[#fff2e6] text-[#fff2e6]"
                onClick={closeMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </button>
            </div>

            <nav className="mt-7" aria-label="Mobile">
              <ol>
                {links.map((link, index) => (
                  <li
                    key={link.href}
                    className="menu-rise border-b border-[#fff2e6]/30"
                    style={{ animationDelay: `${120 + index * 55}ms` }}
                  >
                    <a
                      href={link.href}
                      className="flex items-center gap-3.5 py-[18px]"
                      onClick={closeMenu}
                    >
                      <span className="font-mono text-[11px] tracking-[0.14em] text-sand">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`flex-1 font-serif text-[42px] leading-[0.9] font-bold tracking-[-0.043em] ${
                          link.href === "/#products" ? "text-sand" : "text-[#fff2e6]"
                        }`}
                      >
                        {link.label}
                      </span>
                      <span className="text-[22px] font-semibold text-sand" aria-hidden="true">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="menu-rise mt-auto flex flex-col items-center pt-10" style={{ animationDelay: "360ms" }}>
              <a
                href="/#products"
                className="inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full bg-[#fff2e6] text-[15px] font-semibold text-ink"
                onClick={closeMenu}
              >
                See our products
                <span aria-hidden="true">→</span>
              </a>
              <p className="mt-4 text-center font-serif text-[22px] leading-none font-bold tracking-[-0.01em] text-sand">
                Only what passes.
              </p>
            </div>
          </div>
        </dialog>
      </header>

      <a
        href="/#products"
        tabIndex={showFloat && !open ? 0 : -1}
        aria-hidden={showFloat && !open ? undefined : true}
        className={`fixed inset-x-4 bottom-4 z-30 flex h-[60px] items-center justify-between rounded-full bg-ink pr-3 pl-6 text-[15px] font-semibold text-[#fff2e6] shadow-[0_16px_40px_rgb(20_53_3_/_0.28)] transition duration-300 md:hidden ${
          showFloat && !open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        See our products
        <span className="grid size-[38px] place-items-center rounded-full bg-[#c9e3ce] text-ink" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
      </a>
    </>
  );
}
