import { Bans } from "@/components/bans";
import { CategoryGrid } from "@/components/category-grid";
import { CompareViewer } from "@/components/compare-viewer";
import { CheckMark, CrossMark } from "@/components/marks";
import { HeroHoverCard, HeroHoverGroup } from "@/components/hero-hover";
import { PillarRail } from "@/components/pillar-rail";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { WobbleCard } from "@/components/wobble-card";
import { comparisons, gates, pillars, seeAllProductsLink, ticker } from "@/lib/content";
import { OptimizedImage } from "@/components/optimized-image";

export default function HomePage() {
  return (
    <div id="top">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-[minmax(0,1fr)_480px] md:px-8 md:py-20">
          <div>
            <h1 className="hero-settle font-serif text-[60px] leading-[0.9] font-bold tracking-[-0.037em] text-ink md:text-[122px] md:tracking-[-0.022em]">
              We say no to bad choices.
            </h1>
            <p
              className="hero-settle mt-4 font-serif text-[28px] leading-none font-bold tracking-[-0.015em] text-leaf md:text-[52px]"
              style={{ animationDelay: "90ms" }}
            >
              <span className="relative inline-block">
                So you never have to.
                <svg
                  viewBox="0 0 280 32"
                  preserveAspectRatio="none"
                  className="absolute top-full left-0 mt-0.5 h-5 w-[112%] text-leaf md:mt-1 md:h-[30px]"
                  aria-hidden="true"
                >
                  <path
                    className="hero-scribble"
                    d="M2 18.7C4.8 17.8 13.4 14.4 19.1 13.4C24.8 12.5 30.4 12.7 36.1 12.9C41.8 13.1 47.5 14 53.2 14.5C58.9 15 64.6 15.6 70.3 16C76 16.5 81.6 17.2 87.3 17.1C93 17 98.7 16.6 104.4 15.5C110.1 14.5 115.8 12.4 121.5 10.8C127.2 9.2 132.8 7.2 138.5 6.1C144.2 5 149.9 4.3 155.6 4C161.3 3.7 167 3.7 172.7 4C178.4 4.3 184 5 189.7 6.1C195.4 7.2 201.1 8.9 206.8 10.8C212.5 12.7 218.2 15.3 223.9 17.6C229.6 19.9 235.3 23 240.9 24.4C246.6 25.8 252.3 28.5 258 26C263.7 23.5 271.7 12.4 275.1 9.2C278.4 6.1 277.5 7.5 278 7.1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
            </p>
            <p
              className="hero-settle mt-6 max-w-[32rem] text-base leading-[1.55] text-body md:mt-10 md:text-[20px]"
              style={{ animationDelay: "160ms" }}
            >
              <span className="font-serif text-[22px] leading-none font-bold text-ink md:text-[44px]">
                Sortd
              </span>{" "}
              is building the Middle East&apos;s most trusted commerce platform
              where every product earns its place through rigorous, scientific
              and verified quality standards.
            </p>
            <div
              className="hero-settle mt-6 grid grid-cols-2 gap-2.5 md:mt-8 md:flex md:flex-wrap md:gap-3"
              style={{ animationDelay: "220ms" }}
            >
              <a
                href={seeAllProductsLink}
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-ink px-4 text-[15px] font-semibold text-cream hover:bg-panel md:hidden"
              >
                See our products
              </a>
              <a
                href="#vet"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border-[1.5px] border-ink bg-white px-4 text-[15px] font-semibold text-ink hover:bg-foam md:min-h-11 md:border md:px-5 md:text-base"
              >
                <span className="md:hidden">How we vet</span>
                <span className="hidden md:inline">See how we vet</span>
              </a>
            </div>
          </div>

          <HeroHoverGroup
            className="hero-settle flex w-full flex-col items-start gap-[14px] md:h-[664px] md:w-[480px]"
            style={{ animationDelay: "120ms" }}
          >
            <HeroHoverCard index={0} radius={16}>
              <div className="relative aspect-[416/470] w-full overflow-hidden rounded-[16px] bg-ink md:aspect-[416/470] md:h-[470px] md:w-[416px]">
                <div className="hero-drift relative size-full">
                  <OptimizedImage
                    src="/photos/hero-apple-figma.jpg"
                    alt="A gloved hand tests a red apple with a refractometer"
                    fill
                    priority
                    sizes="(min-width: 768px) 416px, 100vw"
                    className="hero-media object-cover"
                  />
                </div>
                <p className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-ink/80 px-3 py-1.5 text-[11px] font-medium tracking-[0.12em] text-white uppercase md:hidden">
                  <span
                    className="size-1.5 rounded-full bg-sand"
                    aria-hidden="true"
                  />
                  4 / 4 gates passed
                </p>
              </div>
            </HeroHoverCard>
            <div className="flex w-full items-end gap-2 md:h-[180px] md:w-[408px]">
              <div className="min-w-0 flex-1 md:w-[200px] md:flex-none">
                <HeroHoverCard index={1} radius={12}>
                  <div className="relative aspect-[200/180] overflow-hidden rounded-[12px] bg-sky md:aspect-auto md:h-[180px] md:w-[200px]">
                    <div className="absolute top-1/2 left-1/2 h-[140.5556%] w-[126.5%] -translate-x-1/2 -translate-y-1/2 md:h-[253px] md:w-[253px]">
                      <div className="hero-drift relative size-full">
                        <OptimizedImage
                          src="/photos/figma/thumb-veg.svg"
                          alt="Tomatoes, spinach, and carrots laid out for inspection"
                          fill
                          sizes="(min-width: 768px) 253px, 40vw"
                          className="hero-media object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </HeroHoverCard>
              </div>
              <div className="min-w-0 flex-1 md:w-[200px] md:flex-none">
                <HeroHoverCard index={2} radius={12}>
                  <div className="relative aspect-[200/180] overflow-hidden rounded-[12px] bg-sky md:aspect-auto md:h-[180px] md:w-[200px]">
                    <div className="absolute bottom-0 left-0 h-[110.5556%] w-[145.5%] md:h-[199px] md:w-[291px]">
                      <div className="hero-drift relative size-full">
                        <OptimizedImage
                          src="/photos/figma/thumb-lentils.svg"
                          alt="A batch of lentils checked under a magnifier"
                          fill
                          sizes="(min-width: 768px) 291px, 46vw"
                          className="hero-media object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </HeroHoverCard>
              </div>
            </div>
          </HeroHoverGroup>
        </section>

        <Reveal className="bg-sky text-ink">
          <p className="sr-only">{ticker.join(". ")}.</p>
          <div className="ticker-clip" aria-hidden="true">
            <div className="flex w-max animate-marquee items-center py-6">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center">
                  {ticker.map((item) => (
                    <span key={`${copy}-${item}`} className="flex items-center">
                      <span className="px-6 text-[24px] leading-none font-semibold whitespace-nowrap text-ink">
                        {item}
                      </span>
                      <span className="size-1.5 rounded-full bg-ink" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <section
          id="about"
          className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
          aria-labelledby="about-title"
        >
          <Reveal>
            <h2
              id="about-title"
              className="mx-auto max-w-4xl text-center font-serif text-[42px] leading-[0.9] font-bold tracking-[-0.043em] text-ink md:text-[84px] md:leading-[0.92] md:tracking-[-0.02em]"
            >
              More choice hasn’t made it easier to buy better.
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-center text-base leading-[1.5] text-body md:text-[21px] md:leading-[1.55]">
              So we read the labels, run the tests and make the call — before
              anything reaches you.
            </p>
          </Reveal>
          <PillarRail />
          <div className="mt-12 hidden gap-5 md:grid md:grid-cols-3">
            {pillars.map((card, index) => (
              <Reveal key={card.src} delay={index * 90}>
                <WobbleCard>
                  <a
                    href={card.href}
                    className="relative block aspect-[397/580] overflow-hidden rounded-[20px]"
                  >
                    <OptimizedImage
                      src={card.src}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className={`reveal-media object-cover ${card.image_position || "object-[72%_center]"}`}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(26,51,16,0.78)_0%,rgba(26,51,16,0.62)_14%,rgba(26,51,16,0.28)_32%,rgba(26,51,16,0.06)_48%,rgba(26,51,16,0.04)_68%,rgba(26,51,16,0.22)_84%,rgba(26,51,16,0.68)_100%)]" />
                    <div className="absolute inset-0 flex flex-col px-6 pt-10 pb-8 text-cream">
                      <div className="text-center">
                        <p className="font-lora text-[26px] leading-none font-normal italic">
                          {card.kicker}
                        </p>
                        <p className="mt-3 font-archivo-narrow px-1 text-[26px] leading-[1.05]">
                          {card.title}
                        </p>
                        <p className="mt-4 px-6 font-archivo-narrow text-[14px] leading-[1.55] font-light">
                          {card.body}
                        </p>
                      </div>
                      <p className="mt-auto font-archivo-narrow text-[15px] leading-none">
                        {card.cta}
                        <span aria-hidden="true"> →</span>
                      </p>
                    </div>
                    <span className="sr-only">{card.alt}</span>
                  </a>
                </WobbleCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="vet"
          className="bg-cream py-20 md:py-28"
          aria-labelledby="vet-title"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <h2
                id="vet-title"
                className="max-w-4xl font-serif text-[42px] leading-[0.9] font-bold tracking-[-0.043em] text-ink md:text-[84px] md:leading-[0.92] md:tracking-[-0.02em]"
              >
                Four questions, before anything reaches a shelf.
              </h2>
              <p className="mt-5 max-w-3xl pr-10 text-base leading-[1.5] text-body md:text-[21px] md:leading-[1.55]">
                Every product runs through the same four gates, in the same
                order. A product that fails any one of them does not get listed.
              </p>
            </Reveal>
            <ol className="relative mt-9 space-y-3 md:hidden">
              {gates.map((gate, index) => (
                <li
                  key={gate.n}
                  className="relative grid grid-cols-[32px_1fr] gap-3.5"
                >
                  <div className="relative flex justify-center">
                    <span
                      className={`relative z-10 grid size-8 place-items-center rounded-full font-mono text-[11px] font-medium ${
                        gate.state === "done"
                          ? "bg-leaf text-cream"
                          : gate.state === "active"
                            ? "bg-ink text-cream"
                            : "border border-hairline bg-cream text-faint"
                      }`}
                    >
                      {gate.state === "done" ? (
                        <CheckMark className="size-3.5" />
                      ) : (
                        gate.n
                      )}
                    </span>
                    {index < gates.length - 1 ? (
                      <span
                        className={`absolute top-8 bottom-[-12px] left-1/2 w-px -translate-x-1/2 ${
                          gate.state === "done" ? "bg-leaf" : "bg-hairline"
                        }`}
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>
                  <Reveal
                    delay={index * 80}
                    className={`rounded-[18px] px-5 py-4 ${
                      gate.state === "next"
                        ? "border border-dashed border-ink/25 bg-transparent"
                        : gate.state === "active"
                          ? "border-[1.5px] border-ink bg-sky"
                          : "bg-sky"
                    }`}
                  >
                    <p
                      className={`flex items-center justify-between font-mono text-[11px] tracking-[0.14em] uppercase ${
                        gate.state === "next" ? "text-faint" : "text-leaf"
                      }`}
                    >
                      <span>Gate {gate.n}</span>
                      <span>
                        {gate.state === "active" ? "Checking…" : gate.status}
                      </span>
                    </p>
                    <p className="mt-2 font-serif text-[28px] leading-none font-bold tracking-[-0.012em] text-ink">
                      {gate.q}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <div className="mt-5 flex flex-col items-start gap-2 md:hidden">
              <p className="inline-flex items-center gap-2 rounded-full bg-ink px-3.5 py-2.5 text-sm font-semibold text-white">
                <CheckMark className="size-3.5 text-cream" />
                Passes all four → listed
              </p>
              <p className="inline-flex items-center gap-2 rounded-full bg-flag-bg px-3.5 py-2.5 text-sm font-semibold text-flag">
                <CrossMark className="size-3 text-flag" />
                Fails one → never listed
              </p>
            </div>
            <ol className="mt-10 hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
              {gates.map((gate, index) => (
                <li key={gate.n}>
                  <Reveal
                    delay={index * 80}
                    className="h-full rounded-3xl bg-sky px-5 py-6"
                  >
                    <p className="font-mono text-sm tracking-[0.14em] text-leaf">
                      {gate.n}
                    </p>
                    <p className="mt-3 font-serif text-[32px] leading-none font-bold tracking-[-0.015em] text-ink">
                      {gate.q}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="products"
          className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
          aria-labelledby="products-title"
        >
          <Reveal>
            <h2
              id="products-title"
              className="max-w-3xl font-serif text-[42px] leading-[0.9] font-bold tracking-[-0.043em] text-ink md:text-[84px] md:leading-[0.92] md:tracking-[-0.02em]"
            >
              <span className="md:hidden">
                Everything here earned its place.
              </span>
              <span className="hidden md:inline">
                Seventeen categories.
                <br />
                Twenty-eight products.
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-[1.55] text-body md:mt-5 md:text-[21px]">
              The entire shop today. Every one of them cleared the same four
              gates, and the range only grows when something new earns its
              place.
            </p>
            <a
              href={seeAllProductsLink}
              className="mt-6 hidden min-h-11 items-center rounded-full bg-ink px-5 text-base font-semibold text-cream hover:bg-panel md:inline-flex"
            >
              See our Products
            </a>
          </Reveal>

          <CategoryGrid />
        </section>

        <Bans />

        <section
          className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
          aria-labelledby="compare-title"
        >
          <Reveal>
            <h2
              id="compare-title"
              className="max-w-3xl font-serif text-[42px] leading-[0.9] font-bold tracking-[-0.043em] text-ink md:text-[84px] md:leading-[0.92] md:tracking-[-0.02em]"
            >
              The same product.
              <br />
              Two different answers.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-[1.5] text-body md:text-[21px] md:leading-[1.55]">
              What changes when a product is chosen for quality instead of for
              margin. Same category, same shelf, different call.
            </p>
          </Reveal>
          <CompareViewer />
          <div className="mt-12 hidden gap-10 md:grid md:grid-cols-3 md:gap-6">
            {comparisons.map((item, index) => (
              <Reveal
                key={item.name}
                delay={(index % 3) * 90}
                className={item.offset ? "md:mt-16" : undefined}
              >
                <figure>
                  <figcaption className="mb-3 font-sans text-[28px] leading-none font-bold tracking-[-0.015em] text-leaf md:text-[32px]">
                    {item.name}
                  </figcaption>
                  <div
                    className={`relative overflow-hidden rounded-[28px] transition-all duration-500 ease-out motion-reduce:transition-none ${
                      index % 3 === 1
                        ? "origin-center motion-safe:md:hover:z-10 motion-safe:md:hover:scale-105"
                        : index % 3 === 0
                          ? "origin-bottom motion-safe:md:hover:z-10 motion-safe:md:hover:-rotate-6"
                          : "origin-bottom motion-safe:md:hover:z-10 motion-safe:md:hover:rotate-6"
                    }`}
                  >
                    <OptimizedImage
                      src={item.src}
                      alt={`${item.name}, split between what passes and what does not`}
                      width={1127}
                      height={1396}
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="reveal-media h-auto w-full"
                    />
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        <footer className="px-3 pb-3 md:px-0 md:pb-0">
          <div className="relative overflow-hidden rounded-[20px] md:rounded-none">
            <OptimizedImage
              src="/photos/figma/footer-produce.svg"
              alt=""
              width={1800}
              height={222}
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative px-3 pt-28 pb-3 md:flex md:min-h-[680px] md:flex-col md:justify-end md:px-16 md:pt-0 md:pb-0">
              <Reveal className="mx-auto max-w-5xl rounded-[20px] bg-panel px-6 py-10 text-white md:w-full md:max-w-[1218px] md:rounded-t-[28px] md:rounded-b-none md:bg-transparent md:bg-[linear-gradient(180deg,rgba(63,115,22,0.72)_0%,rgba(36,86,13,0.84)_32%,rgba(30,74,11,0.96)_58%,#1e4a0b_100%)] md:px-[100px] md:pt-24 md:pb-14">
                <h2 className="max-w-3xl font-serif text-[42px] leading-[0.9] font-bold tracking-[-0.043em] md:max-w-none md:text-[84px] md:leading-[0.9] md:tracking-[-0.022em]">
                  That’s Sortd.
                  <span className="mt-1 block text-sand md:mt-0">
                    Only what passes.
                  </span>
                  Everything else is removed.
                </h2>
                <a
                  href={seeAllProductsLink}
                  className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-cream px-5 text-[15px] font-semibold text-ink hover:bg-white md:mt-[54px] md:w-fit md:justify-start md:rounded-xl md:px-7 md:py-4 md:font-medium"
                >
                  <span className="md:hidden">See the products</span>
                  <span className="hidden md:inline">See The Products</span>
                  <span className="md:hidden" aria-hidden="true">
                    →
                  </span>
                </a>
                <div className="mt-8 border-t border-white/80 pt-5 md:mt-7 md:border-0 md:pt-0">
                  <nav
                    aria-label="Footer"
                    className="flex flex-wrap gap-x-6 gap-y-2 text-base text-white md:hidden"
                  >
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/#products">Products</a>
                  </nav>
                  <div className="mt-6 flex items-end justify-between gap-4 md:hidden">
                    <p className="font-serif text-[22px] leading-none font-bold tracking-[-0.01em] text-white">
                      Only what passes.
                    </p>
                    <p className="font-mono text-[11px] tracking-[0.14em] text-sand">
                      © 2026 SORTD
                    </p>
                  </div>
                  <div className="hidden items-center justify-between md:flex">
                    <p className="font-serif text-[30px] leading-none font-bold tracking-[-0.012em] text-cream">
                      Only what passes.
                    </p>
                    <nav
                      aria-label="Footer"
                      className="flex items-center gap-[30px] text-[18px] leading-none text-white"
                    >
                      <a href="#top" className="hover:text-cream">
                        Home
                      </a>
                      <a href="/about" className="hover:text-cream">
                        About Us
                      </a>
                      <a href="#products" className="hover:text-cream">
                        Products
                      </a>
                      <p className="font-mono text-[11px] tracking-[0.14em] text-sand">
                        © 2026 SORTD
                      </p>
                    </nav>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
