import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { baseMetadata } from "@/lib/seo";
import { agentSchema, reviewSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = baseMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <GoogleTagManager gtmId="GTM-WBDMTNL4" />
      <head>
        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://em.realscout.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://d1buiexcd5gara.cloudfront.net" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(agentSchema) }}
        />
        {reviewSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
          />
        )}
      </head>
      <body className="font-sans antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L03F985VF0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L03F985VF0');
          `}
        </Script>
        
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
