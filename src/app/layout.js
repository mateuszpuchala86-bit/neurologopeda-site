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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
