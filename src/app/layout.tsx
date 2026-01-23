import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel Insurance - Compare Travel Insurance Policies Online",
  description: "Find comprehensive travel insurance for worldwide trips. Compare single trip and annual multi-trip policies from leading UK insurers.",
  keywords: ["travel insurance", "travel insurance UK", "annual travel insurance", "single trip insurance", "worldwide travel cover"],
  openGraph: {
    title: "Travel Insurance - Compare Travel Insurance Policies Online",
    description: "Find comprehensive travel insurance for worldwide trips. Compare single trip and annual multi-trip policies from leading UK insurers.",
    url: "https://travelinsurance.quest",
    siteName: "Travel Insurance",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Insurance - Compare Travel Insurance Policies Online",
    description: "Find comprehensive travel insurance for worldwide trips. Compare single trip and annual multi-trip policies from leading UK insurers.",
  },
  alternates: { canonical: "https://travelinsurance.quest" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Travel Insurance",
              url: "https://travelinsurance.quest",
              description: "Find comprehensive travel insurance for worldwide trips. Compare single trip and annual multi-trip policies from leading UK insurers.",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
