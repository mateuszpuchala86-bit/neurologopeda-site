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
  title: "Neurologopeda kliniczny | Wsparcie karmienia niemowląt i dzieci",
  description: "Neurologopeda kliniczny specjalizujący się w terapii niemowląt i dzieci. Wsparcie karmienia, rozwoju mowy i funkcji ustno-twarzowych.",

  openGraph: {
    title: "Neurologopeda kliniczny",
    description: "Wsparcie niemowląt i dzieci w karmieniu i rozwoju.",
    url: "https://twoja-domena.pl",
    siteName: "Neurologopeda",
    type: "website"
  },

  keywords: [
    "neurologopeda",
    "logopeda niemowląt",
    "problemy z karmieniem",
    "ssanie niemowlę",
    "terapia logopedyczna dzieci",
    "logopeda Świętokrzyskie"
  ]
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
