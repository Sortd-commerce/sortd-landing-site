import type { Metadata } from "next";
import { Archivo, Archivo_Narrow, IBM_Plex_Mono, Lora } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sortd.com";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora-family",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex-family",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const description =
  "Sortd is building the Middle East's most trusted commerce platform, where every product earns its place through rigorous, scientific and verified quality standards.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sortd — Only what passes",
    template: "%s · Sortd",
  },
  description,
  applicationName: "Sortd",
  keywords: [
    "Sortd",
    "food standards",
    "clean ingredients",
    "Middle East grocery",
    "product testing",
  ],
  authors: [{ name: "Sortd" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sortd — Only what passes",
    description,
    url: "/",
    siteName: "Sortd",
    locale: "en",
    type: "website",
    images: [
      {
        url: "/photos/hero-apple.jpg",
        width: 826,
        height: 932,
        alt: "A gloved hand tests a red apple with a refractometer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sortd — Only what passes",
    description,
    images: ["/photos/hero-apple.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Sortd",
      url: siteUrl,
      description,
    },
    {
      "@type": "WebSite",
      name: "Sortd",
      url: siteUrl,
      description,
      publisher: { "@type": "Organization", name: "Sortd" },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${archivoNarrow.variable} ${lora.variable} ${plex.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-body">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
