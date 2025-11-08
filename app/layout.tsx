import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ajit Sivakumar - Portfolio",
  description: "Student and Full-Stack Developer Portfolio, Interest in Quantitative Finance and AI, Competitive Fencer",
  keywords: ["developer", "portfolio", "web development", "full-stack", "react", "next.js"],
  authors: [{ name: "Ajit Sivakumar" }],
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3crect width='32' height='32' fill='%23000'/%3e%3ctext x='16' y='20' font-family='Arial,sans-serif' font-size='14' font-weight='bold' text-anchor='middle' fill='%23fff'%3eAS%3c/text%3e%3c/svg%3e",
        type: "image/svg+xml",
      },
    ],
    shortcut: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3crect width='32' height='32' fill='%23000'/%3e%3ctext x='16' y='20' font-family='Arial,sans-serif' font-size='14' font-weight='bold' text-anchor='middle' fill='%23fff'%3eAS%3c/text%3e%3c/svg%3e",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
