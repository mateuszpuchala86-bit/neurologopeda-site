import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Neurologopeda kliniczny Kielce – terapia niemowląt i dzieci | Katarzyna Puchała",

  description:
    "Neurologopeda Kielce. Terapia niemowląt i dzieci, problemy z karmieniem, oddychaniem i rozwojem mowy. Indywidualne wsparcie od pierwszych dni życia.",

  keywords: [
    "neurologopeda Kielce",
    "neurologopeda niemowlęta",
    "problemy z karmieniem dziecka",
    "terapia logopedyczna dzieci",
    "neurologopeda dziecięcy",
  ],

  openGraph: {
    title:
      "Neurologopeda kliniczny Kielce – Katarzyna Puchała",
    description:
      "Terapia niemowląt i dzieci w Kielcach. Problemy z karmieniem, oddychaniem i rozwojem mowy.",
    url: "https://twoja-domena.pl",
    siteName: "Neurologopeda – Katarzyna Puchała",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
  className={inter.className}
  style={{
    lineHeight: "1.6",
    letterSpacing: "-0.2px"
  }}
>

  {/* SEO SCHEMA */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Neurologopeda Katarzyna Puchała",
        "image": "https://neurologopeda-site.vercel.app/doctor.jpg",
        "telephone": "+48727411741",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bilcza",
          "addressRegion": "Świętokrzyskie",
          "addressCountry": "PL"
        },
        "areaServed": [
          "Kielce",
          "Morawica",
          "Bilcza"
        ]
      })
    }}
  />

  {children}

</body>
    </html>
  );
}
