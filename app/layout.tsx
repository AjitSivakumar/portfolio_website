import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ajit Sivakumar - Portfolio",
  description: "Student and Full-Stack Developer Portfolio, Interest in Quantitative Finance and AI, Competitive Fencer",
  keywords: ["developer", "portfolio", "web development", "full-stack", "react", "next.js"],
  authors: [{ name: "Ajit Sivakumar" }],
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
