"use client";

import { useId, useRef, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#vet", label: "How we vet" },
  { href: "#bans", label: "What we ban" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openMenu() {
    dialogRef.current?.showModal();
    setOpen(true);
  }

  function closeMenu() {
    dialogRef.current?.close();
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-sky/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" className="font-serif text-[2rem] leading-none font-semibold tracking-tight text-ink">
          Sortd
        </a>

        <nav className="hidden items-center gap-8 text-[15px] text-body md:flex" aria-label="Primary">
          <a href="#about" className="rounded-full px-1 py-2 hover:text-ink">
            About
          </a>
          <a href="#products" className="rounded-full px-1 py-2 hover:text-ink">
            Products
          </a>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="#products"
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-[#1d4a0a] md:px-5"
          >
            <span className="md:hidden">Products</span>
            <span className="hidden md:inline">See our Products</span>
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-ink/20 bg-white/70 text-ink md:hidden"
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

      <dialog
        ref={dialogRef}
        id="mobile-nav"
        className="menu-dialog md:hidden"
        aria-labelledby={titleId}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeMenu();
        }}
      >
        <div className="flex items-center justify-between">
          <p id={titleId} className="font-serif text-2xl text-ink">
            Sortd
          </p>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-ink/15"
            onClick={closeMenu}
          >
            <span className="sr-only">Close menu</span>
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
        </div>
        <nav aria-label="Mobile">
          <ul className="mt-4 space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-2xl px-3 py-3 font-serif text-2xl text-ink hover:bg-white"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#products"
          className="mt-4 flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-medium text-white"
          onClick={closeMenu}
        >
          See our Products
        </a>
      </dialog>
    </header>
  );
}
