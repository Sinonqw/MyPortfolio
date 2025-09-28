import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Neon Developer Portfolio",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Montserrat:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-inter: 'Inter', sans-serif;
            --font-montserrat: 'Montserrat', sans-serif;
          }
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
          bg-gray-950 text-gray-100 min-h-screen 
          transition-colors duration-500
          font-[var(--font-inter)]
        `}
      >
        {children}
      </body>
    </html>
  );
}
