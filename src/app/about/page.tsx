import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "A note from the founder of Sortd. We check, taste and reject products before they ever reach you.",
};

const nav = [
  { href: "/#vet", label: "The quality engine" },
  { href: "/#bans", label: "What we reject" },
  { href: "/#products", label: "Membership" },
];

const stats = [
  { value: "500+", label: "harmful ingredients" },
  { value: "Zero", label: "ultra-processed food" },
  { value: "None", label: "misleading claims" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#fff2e6] text-ink">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="hidden h-[88px] items-center justify-between border-b border-[#e4d9c7] px-10 lg:flex xl:px-[100px]">
        <Link href="/" className="font-serif text-[32px] leading-[1.05] font-bold tracking-[-0.012em]">
          SORTD
        </Link>
        <nav className="flex items-center gap-9 text-[15px] leading-[1.4]" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="font-medium text-[#2e4a22] hover:text-ink">
              {item.label}
            </Link>
          ))}
          <Link href="/about" aria-current="page" className="font-semibold text-ink">
            About
          </Link>
        </nav>
        <Link
          href="/#products"
          className="rounded-full bg-ink px-6 py-[13px] text-[15px] leading-[1.4] font-medium text-[#fff2e6]"
        >
          Become a member
        </Link>
      </header>

      <main id="main">
        <section className="flex flex-col gap-8 px-6 py-12 lg:flex-row lg:items-end lg:gap-16 lg:px-[100px] lg:py-24">
          <div className="lg:flex lg:h-[321px] lg:flex-1 lg:flex-col lg:justify-end">
            <p className="font-mono text-[10px] leading-[1.3] font-normal tracking-[0.14em] text-leaf uppercase lg:text-[12px] lg:font-medium">
              A note from our founder
            </p>
            <h1 className="mt-5 font-serif text-[40px] leading-[0.98] font-bold tracking-[-0.022em] lg:mt-[26px] lg:text-[78px] lg:leading-none">
              <span className="lg:hidden">
                Shopping got faster.
                <br />
                Choosing well
                <br />
                got harder.
              </span>
              <span className="hidden lg:inline">We got tired of second-guessing what we buy.</span>
            </h1>
          </div>
          <div className="relative h-[420px] w-full overflow-hidden rounded-[14px] bg-sky lg:h-[470px] lg:w-[400px] lg:shrink-0 lg:rounded-2xl">
            <Image
              src="/photos/figma/founder.jpg"
              alt="Portrait of the Sortd founder"
              fill
              priority
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover object-[center_18%]"
            />
          </div>
        </section>

        <section className="flex flex-col gap-6 px-6 pb-14 lg:flex-row lg:gap-20 lg:px-[100px] lg:pb-24">
          <div className="w-full border-t-2 border-ink pt-3 lg:w-[200px] lg:shrink-0">
            <p className="font-mono text-[10px] leading-[1.3] tracking-[0.14em] text-leaf lg:text-[11px] lg:font-bold">
              DUBAI
            </p>
            <p className="mt-2 font-mono text-[10px] leading-[1.3] tracking-[0.14em] text-faint">FOUNDER’S NOTE</p>
          </div>
          <div className="flex max-w-[780px] flex-col gap-5 text-[17px] leading-[1.65] text-[#2e4a22] lg:gap-[26px] lg:text-[22px]">
            <p className="hidden font-bold lg:block">
              Shopping got faster. Choice got bigger. But somehow, choosing well got harder.
            </p>
            <p>
              We kept asking the same things. Is this actually good? Can I trust it? Is it better — or just better
              marketed?
            </p>
            <p className="font-semibold text-ink">That’s why we built Sortd.</p>
            <p>We still care about speed, and we aim to get your order to you within 30 minutes.</p>
            <p>
              We do the digging, the checking, the tasting and the rejecting before a product ever reaches you — so you
              can shop with confidence, without overthinking every choice.
            </p>
          </div>
        </section>

        <section className="bg-ink px-6 py-14 text-[#fff2e6] lg:px-[100px] lg:py-[104px]">
          <p className="max-w-[1033px] font-serif text-[34px] leading-[1.05] font-bold tracking-[-0.02em] lg:text-[76px] lg:leading-[0.92]">
            <span className="lg:hidden">“Speed isn’t our reason to exist. Quality is.”</span>
            <span className="hidden lg:inline">
              “Future of commerce is not more choice, but who helps you make better decisions”
            </span>
          </p>
          <div className="mt-6 lg:mt-9">
            <p className="font-mono text-[10px] leading-[1.3] tracking-[0.14em] text-sand lg:text-[11px]">
              [FOUNDER NAME]
            </p>
            <p className="mt-1 font-mono text-[10px] leading-[1.3] tracking-[0.14em] text-faint">FOUNDER, SORTD</p>
          </div>
        </section>

        <section className="bg-[#fff2e6] px-6 py-14 lg:bg-white lg:px-[100px] lg:py-[104px]">
          <p className="font-mono text-[10px] leading-[1.3] tracking-[0.14em] text-leaf lg:text-[12px] lg:font-medium">
            THE RESULT
          </p>
          <h2 className="mt-[18px] font-serif text-[34px] leading-[1.05] font-bold tracking-[-0.012em] lg:mt-[26px] lg:text-[64px] lg:leading-[0.95] lg:tracking-[-0.018em]">
            What saying no adds up to.
          </h2>
          <div className="mt-9 flex flex-col gap-[22px] lg:mt-16 lg:flex-row lg:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex-1 border-t-2 border-ink pt-4 lg:pt-[22px]">
                <p className="font-mono text-[10px] leading-[1.3] tracking-[0.14em] text-faint lg:text-[11px]">
                  NO TO
                </p>
                <p className="mt-1.5 font-serif text-[58px] leading-[0.9] font-bold tracking-[-0.022em] text-leaf lg:mt-2.5 lg:text-[88px]">
                  {stat.value}
                </p>
                <p className="mt-1.5 font-serif text-[20px] leading-[1.05] font-bold tracking-[-0.012em] lg:mt-2.5 lg:text-[28px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative bg-white">
        <div className="relative min-h-[640px] lg:flex lg:min-h-[760px] lg:flex-col lg:justify-end">
          <Image
            src="/photos/figma/footer-produce.svg"
            alt=""
            fill
            unoptimized
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
          <div className="relative px-3 pt-[150px] pb-3 lg:px-16 lg:pt-0 lg:pb-0">
            <div
              className="mx-auto flex max-w-[1218px] flex-col rounded-[20px] bg-[linear-gradient(to_top,#1e4a0b_58%,rgba(71,176,26,0.6)_157%)] px-6 pt-10 pb-7 text-[#fff2e6] lg:rounded-t-[28px] lg:rounded-b-none lg:bg-[linear-gradient(180deg,rgba(63,115,22,0.72)_0%,rgba(36,86,13,0.84)_32%,rgba(30,74,11,0.96)_58%,#1e4a0b_100%)] lg:px-[100px] lg:pt-24 lg:pb-14"
            >
              <h2 className="font-serif text-[42px] leading-[0.94] font-bold tracking-[-0.018em] lg:text-[84px] lg:leading-[0.9] lg:tracking-[-0.022em]">
                That’s Sortd.
                <span className="block text-sand">Only what passes.</span>
                Everything else is removed.
              </h2>
              <Link
                href="/#products"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#fff2e6] px-7 py-4 text-[15px] leading-[1.2] font-semibold text-ink lg:mt-[54px] lg:w-fit lg:rounded-xl lg:py-4 lg:font-medium"
              >
                <span className="lg:hidden">See the products</span>
                <span className="hidden lg:inline">See The Products</span>
                <span className="lg:hidden" aria-hidden="true">
                  →
                </span>
              </Link>
              <div className="mt-8 h-px bg-[#fff2e6] lg:hidden" />
              <nav
                aria-label="Footer"
                className="mt-5 flex gap-6 text-[16px] leading-[1.55] lg:hidden"
              >
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/#products">Products</Link>
              </nav>
              <div className="mt-6 flex items-center justify-between lg:mt-7 lg:w-full">
                <p className="font-serif text-[22px] leading-[1.05] font-bold tracking-[-0.01em] lg:text-[30px] lg:tracking-[-0.012em]">
                  Only what passes.
                </p>
                <div className="hidden items-center gap-[30px] text-[18px] leading-[2.2] text-white lg:flex">
                  <Link href="/">Home</Link>
                  <Link href="/about">About Us</Link>
                  <Link href="/#products">Products</Link>
                  <p className="font-mono text-[11px] leading-[1.3] tracking-[0.14em] text-sand">© 2026 SORTD</p>
                </div>
                <p className="font-mono text-[11px] leading-[1.3] tracking-[0.14em] text-sand lg:hidden">
                  © 2026 SORTD
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
