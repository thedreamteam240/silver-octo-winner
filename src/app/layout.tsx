import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Silver Octo Winner",
  description: "The project for the 24-hour WebCup jam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
