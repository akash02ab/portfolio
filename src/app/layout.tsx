import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "akash banchhor",
  description: "Akash Banchhor - Frontend Developer",
  icons: {
    icon: "/icon.png", 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior: "smooth"}}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
