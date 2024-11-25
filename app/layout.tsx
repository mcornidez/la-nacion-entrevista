import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "La Nación",
  description: "Últimas noticias de Argentina y el mundo",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <Image
              src="/images/logo-ln.webp"
              alt="Logo La Nación"
              width={150}
              height={50}
              priority
          />
        </div>
      </header>
      <main className="pt-24">
        {children}
      </main>
      </body>
      </html>
  );
}