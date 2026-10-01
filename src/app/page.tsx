import { Bans } from "@/components/bans";
import { SiteHeader } from "@/components/site-header";
import { categories, comparisons, gates, pillars, ticker } from "@/lib/content";
import Image from "next/image";

export default function HomePage() {
  return (
    <div id="top">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-20">
          <div>
            <h1 className="hero-settle font-serif text-[2.6rem] leading-[0.96] font-medium tracking-tight text-ink sm:text-6xl md:text-[4.75rem]">
              We say no to bad choices.
            </h1>
            <p
              className="hero-settle mt-4 font-serif text-[1.7rem] leading-tight font-medium text-leaf sm:text-4xl"
              style={{ animationDelay: "90ms" }}
            >
              <span className="relative inline-block">
                So you never have to.
                <svg
                  viewBox="0 0 220 12"
                  className="absolute -bottom-1.5 left-0 w-full text-leaf"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8c30-6 50 4 80-1s50 4 78 0 40-4 58 1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </p>
            <p
              className="hero-settle mt-8 max-w-[38rem] text-base leading-relaxed text-body md:text-lg"
              style={{ animationDelay: "160ms" }}
            >
              <span className="font-semibold text-ink">Sortd</span> is building the Middle East&apos;s
              most trusted commerce platform where every product earns its place through rigorous,
              scientific and verified quality standards.
            </p>
            <div className="hero-settle mt-8 flex flex-wrap gap-3" style={{ animationDelay: "220ms" }}>
              <a
                href="#products"
                className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-white hover:bg-[#1d4a0a] md:hidden"
              >
                See our products
              </a>
              <a
                href="#vet"
                className="inline-flex min-h-11 items-center rounded-full border border-ink/30 bg-white px-5 text-sm font-medium text-ink hover:border-ink"
              >
                <span className="md:hidden">How we vet</span>
                <span className="hidden md:inline">See how we vet</span>
              </a>
            </div>
          </div>

          <div className="hero-settle" style={{ animationDelay: "120ms" }}>
            <div className="relative overflow-hidden rounded-[28px] bg-ink">
              <Image
                src="/photos/hero-apple.jpg"
                alt="A gloved hand tests a red apple with a refractometer"
                width={826}
                height={932}
                priority
                sizes="(min-width: 768px) 46vw, 100vw"
                className="h-auto w-full"
              />
              <p className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-ink/80 px-3 py-1.5 text-[11px] font-medium tracking-[0.12em] text-white uppercase md:hidden">
                <span className="size-1.5 rounded-full bg-[#b7e3a1]" aria-hidden="true" />
                4 / 4 gates passed
              </p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Image
                src="/photos/thumb-veg.jpg"
                alt="Tomatoes, spinach, and carrots laid out for inspection"
                width={394}
                height={334}
                sizes="(min-width: 768px) 22vw, 46vw"
                className="h-32 w-full rounded-2xl object-cover sm:h-36"
              />
              <Image
                src="/photos/thumb-lentils.jpg"
                alt="A batch of lentils checked under a magnifier"
                width={394}
                height={334}
                sizes="(min-width: 768px) 22vw, 46vw"
                className="h-32 w-full rounded-2xl object-cover sm:h-36"
              />
            </div>
          </div>
        </section>

        <div className="bg-sky text-ink">
          <p className="sr-only">{ticker.join(". ")}.</p>
          <div className="ticker-clip" aria-hidden="true">
            <div className="flex w-max animate-marquee items-center py-4">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center">
                  {ticker.map((item) => (
                    <span key={`${copy}-${item}`} className="flex items-center">
                      <span className="px-6 text-sm font-medium whitespace-nowrap text-ink md:text-[15px]">
                        {item}
                      </span>
                      <span className="size-1.5 rounded-full bg-ink" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" aria-labelledby="about-title">
          <h2
            id="about-title"
            className="mx-auto max-w-3xl text-center font-serif text-4xl leading-[1.02] font-medium tracking-tight text-ink md:text-[4rem]"
          >
            More choice hasn&apos;t made it easier to buy better.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-base leading-relaxed text-body md:text-lg">
            So we read the labels, run the tests and make the call — before anything reaches you.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((card) => (
              <a key={card.src} href={card.href} className="block overflow-hidden rounded-[28px]">
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={800}
                  height={1160}
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="h-auto w-full"
                />
              </a>
            ))}
          </div>
        </section>

        <section id="vet" className="bg-cream py-20 md:py-28" aria-labelledby="vet-title">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2
              id="vet-title"
              className="max-w-3xl font-serif text-4xl leading-[1.02] font-medium tracking-tight text-ink md:text-[4rem]"
            >
              Four questions, before anything reaches a shelf.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-body md:text-lg">
              Every product runs through the same four gates, in the same order. A product that fails
              any one of them does not get listed.
            </p>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gates.map((gate) => (
                <li key={gate.n} className="rounded-3xl bg-pill px-5 py-6">
                  <p className="text-sm font-medium text-muted">{gate.n}</p>
                  <p className="mt-3 font-serif text-2xl leading-tight text-ink">{gate.q}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" aria-labelledby="products-title">
          <h2
            id="products-title"
            className="max-w-3xl font-serif text-4xl leading-[1.02] font-medium tracking-tight text-ink md:text-[4rem]"
          >
            Seventeen categories.
            <br />
            Twenty-eight products.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-body md:text-lg">
            The entire shop today. Every one of them cleared the same four gates, and the range only
            grows when something new earns its place.
          </p>
          <a
            href="#products-grid"
            className="mt-6 inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-white hover:bg-[#1d4a0a]"
          >
            See our Products
          </a>

          <ul id="products-grid" className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((item) => (
              <li key={item.name} className="text-center">
                <Image
                  src={item.src}
                  alt=""
                  width={379}
                  height={379}
                  sizes="(min-width: 1024px) 15vw, (min-width: 640px) 30vw, 45vw"
                  className="aspect-square h-auto w-full rounded-[28px] object-cover"
                />
                <p className="mt-3 text-sm font-medium text-ink">{item.name}</p>
              </li>
            ))}
            <li className="text-center">
              <div className="grid aspect-square w-full place-items-center rounded-[28px] border border-dashed border-muted bg-foam">
                <p className="px-3 text-center text-xs font-semibold tracking-[0.14em] text-leaf uppercase">
                  Coming next
                </p>
              </div>
              <p className="mt-3 text-sm font-medium text-muted">Fresh produce</p>
            </li>
          </ul>
        </section>

        <Bans />

        <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" aria-labelledby="compare-title">
          <h2
            id="compare-title"
            className="max-w-3xl font-serif text-4xl leading-[1.02] font-medium tracking-tight text-ink md:text-[4rem]"
          >
            The same product.
            <br />
            Two different answers.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-body md:text-lg">
            What changes when a product is chosen for quality instead of for margin. Same category,
            same shelf, different call.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
            {comparisons.map((item) => (
              <figure key={item.name} className={item.offset ? "md:mt-16" : undefined}>
                <figcaption className="mb-3 font-serif text-2xl text-ink">{item.name}</figcaption>
                <Image
                  src={item.src}
                  alt={`${item.name}, split between what passes and what does not`}
                  width={760}
                  height={950}
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="h-auto w-full rounded-[28px]"
                />
              </figure>
            ))}
          </div>
        </section>

        <footer className="px-4 pb-6 md:px-6">
          <div className="relative overflow-hidden rounded-[32px]">
            <Image
              src="/photos/footer-produce.webp"
              alt=""
              width={1800}
              height={222}
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative px-5 py-16 md:px-10 md:py-20">
              <div className="mx-auto max-w-5xl rounded-[28px] bg-panel px-6 py-10 text-white md:px-12 md:py-14">
                <h2 className="max-w-3xl font-serif text-4xl leading-[1.02] font-medium tracking-tight md:text-[4rem]">
                  That&apos;s Sortd.
                  <span className="mt-1 block text-[#d7e7c8]">Only what passes.</span>
                  Everything else is removed.
                </h2>
                <a
                  href="#products"
                  className="mt-8 inline-flex min-h-11 items-center rounded-full bg-[#f4efe6] px-5 text-sm font-medium text-ink hover:bg-white"
                >
                  See The Products
                </a>
                <div className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-6 text-sm text-[#e7f0de] sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-medium text-white">Only what passes.</p>
                  <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <a href="#top" className="underline-offset-4 hover:underline">
                      Home
                    </a>
                    <a href="#about" className="underline-offset-4 hover:underline">
                      About Us
                    </a>
                    <a href="#products" className="underline-offset-4 hover:underline">
                      Products
                    </a>
                    <p>© 2026 Sortd</p>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
