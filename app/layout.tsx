import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "A sleek, dark-themed portfolio built with Next.js and Tailwind CSS.",
  icons: [
    {
      rel: "icon",

      url: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMiAzMic+CiAgPHJlY3Qgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJyBmaWxsPScjMGEwYTBhJy8+CiAgPHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjZDk0NmVmJyBzdHJva2Utd2lkdGg9JzMnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgZD0nTTEwIDhsLTYgOCA2IDhtMTItMTZsNiA4LTYgOCcvPgogIDxzdHlsZT4KICAgIHBhdGggeyBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAycHggI2Q5NDZlZikgZHJvcC1zaGFkb3coMCAwIDRweCAjZDk0NmVmKTsgfQogIDwvc3R5bGU+Cjwvc3ZnPg==",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          /* Переменные шрифтов теперь автоматически генерируются next/font, 
             но мы оставляем стили для неонового свечения */
          html {
            scroll-behavior: smooth;
          }
          .neon-fuchsia-glow {
            filter: drop-shadow(0 0 4px rgba(217, 70, 239, 0.5));
          }
          .neon-cyan-glow {
            filter: drop-shadow(0 0 4px rgba(47, 219, 255, 0.5));
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${montserrat.variable} antialiased 
          bg-gray-950 text-gray-100 min-h-screen 
          transition-colors duration-500
          
          /* Установка Inter как основного шрифта по умолчанию */
          font-[var(--font-inter)]
        `}
      >
        {children}
      </body>
    </html>
  );
}
