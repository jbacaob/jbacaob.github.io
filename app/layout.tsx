import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import "katex/dist/katex.min.css";
import Link from "next/link";
import { ThemeToggle } from "./components/ThemeToggle";

export const metadata: Metadata = {
  title: "Jafet Baca | Economics Ph.D. Candidate",
  description: "Academic website of Jafet Baca, Economics Ph.D. Candidate at Emory University.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-black">
        <Providers>
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="flex w-full items-center justify-between py-8">
              <Link href="/" className="text-xl font-bold tracking-tight">
                Jafet Baca
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                <Link href="/research" className="hover:text-black dark:hover:text-white transition-colors">Research</Link>
                <Link href="/teaching" className="hover:text-black dark:hover:text-white transition-colors">Teaching</Link>
                <Link href="/cv" className="hover:text-black dark:hover:text-white transition-colors">CV</Link>
                <Link href="/blog" className="hover:text-black dark:hover:text-white transition-colors">Blog</Link>
                <Link href="/resources" className="hover:text-black dark:hover:text-white transition-colors">Resources</Link>
                <ThemeToggle />
              </nav>
            </div>
            <main className="min-h-screen py-10">
              {children}
            </main>
            <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10 text-center text-sm text-zinc-500">
              © {new Date().getFullYear()} Jafet Baca-Obando. All rights reserved.
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
