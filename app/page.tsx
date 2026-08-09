import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-[70vh]">
      <div className="max-w-3xl">
        <p className="text-xs font-bold tracking-widest text-zinc-500 dark:text-zinc-400 mb-6 uppercase">
          Economics Ph.D. Candidate & Researcher
        </p>
        
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-serif">
            Jafet Baca
          </h1>
          <div className="shrink-0">
            <img 
              src="/assets/img/jbaca.jpg" 
              alt="Jafet Baca" 
              className="w-32 h-32 md:w-40 md:h-40 object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
            />
          </div>
        </div>

        <p className="text-xl md:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-300 mb-12 max-w-2xl">
          Explore research on International and Monetary Macroeconomics, find teaching resources, and read my blog on applied economics.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link 
            href="/research" 
            className="px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold text-sm transition-transform hover:-translate-y-0.5"
          >
            Research
          </Link>
          <Link 
            href="/teaching" 
            className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            Teaching
          </Link>
          <Link 
            href="/cv" 
            className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            CV
          </Link>
          <Link 
            href="/blog" 
            className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            Blog
          </Link>
          <a 
            href="mailto:jbaca.ob@gmail.com" 
            className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
