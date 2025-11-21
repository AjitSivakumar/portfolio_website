import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ajit Sivakumar",
  description: "Mathematics & Computer Science Student focused on applied mathematics and machine learning applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
