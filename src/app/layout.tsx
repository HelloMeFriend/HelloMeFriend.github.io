import type { Metadata } from "next";
import { Geist, Geist_Mono, Andada_Pro} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const andadaPro = Andada_Pro({
  variable: "--font-andada-pro",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Omar Alshanyour",
  description: "Him",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${andadaPro.variable} antialiased`}
      >
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <filter id="filter">
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0 1 1 1" />
            </feComponentTransfer>
          </filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
