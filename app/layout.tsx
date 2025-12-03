import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ajit Sivakumar",
  description: "Mathematics & Computer Science Student focused on applied mathematics and machine learning applications.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3crect width='32' height='32' fill='%23000'/%3e%3ctext x='16' y='21' font-family='Arial,sans-serif' font-size='16' font-weight='bold' text-anchor='middle' fill='%23fff'%3eAS%3c/text%3e%3c/svg%3e",
        type: "image/svg+xml",
      },
    ],
  },
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
