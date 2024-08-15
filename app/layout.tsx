import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto({
  weight: "400",
  variable: "--font",
  display: "swap",
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Marion Corvez | Portfolio",
  description:
    "Discover Marion Corvez's profile, from product manager to front-end developer, as well as digital trainer",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Marion Corvez",
    description:
      "Hello, I am a junior front-end developer, a senior product manager, as well as a teacher",
    url: "https://marioncorvez.github.io/",
    siteName: "Marion Corvez | Portfolio",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/MarionCorvez/nina-carducci/main/assets/images/slider/ryoji-iwata-medium.webp",
        secureUrl:
          "https://raw.githubusercontent.com/MarionCorvez/nina-carducci/main/assets/images/slider/ryoji-iwata-medium.webp",
        width: 1024,
        height: 473,
        alt: "Preview image for Marion Corvez's website",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marion Corvez",
  description:
    "Presentation of Marion Corvez's profile, from product manager to front-end developer, as well as digital trainer",
  url: "https://marioncorvez.github.io/",
  email: "marion.corvez@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <section>
          {" "}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </section>
      </body>
    </html>
  );
}
