
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad",
  description: "It my website",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
  
      <header className="bg-gray-700 px-5 py-5 flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contectus">Contact Us</Link>
          <Link href="/aboutus">About Us</Link>
          <Link href="/new">12-Nov</Link>
          <Link href="/reactlearning">React</Link>
        </header>
        
        {children}
        <footer className="bg-gray-500 flex justify-center py-5">
          <p>&copy; 2023 - All rights reserved.</p>
        </footer>
        `
      </body>
      
    </html>
  );
}