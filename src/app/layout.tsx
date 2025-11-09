import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="grid min-h-screen grid-cols-[280px_1fr]">
          <aside className="border-r border-white/10 bg-white/5 backdrop-blur-xl px-4 sm:px-5 py-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              
                  <div className="h-10 w-10 rounded-full ring-2 ring-white/20 overflow-hidden">
                        <img
                            src="me.png"
                            alt="Your photo"
                            className="h-full w-full object-cover"  />
</div>

              <div>
                <div className="font-semibold">Bryan Bucknell</div>
                <div className="text-xs text-zinc-400">Data Scientist</div>
              </div>
            </div>

            <div className="relative">
              <input
                placeholder="Search… (⌘K)"
                className="w-full rounded-xl bg-white/5 backdrop-blur placeholder:text-zinc-500 text-sm px-3 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <nav className="text-sm mt-2 space-y-1">
              <SectionLink label="About" />
              <SectionLink label="Projects" />
              <SectionLink label="Notebooks" />
              <SectionLink label="Blog" />
              <SectionLink label="Resume" />
              <SectionLink label="Contact" />
            </nav>

   
            
            
            <div className="mt-auto flex items-center justify-between text-sm text-zinc-400">
              <span>© {new Date().getFullYear()}</span>
              <div className="flex gap-3">
                <IconButton label="G" />
                <IconButton label="in" />
                <IconButton label="@" />
              </div>
            </div>
          </aside>

          <main className="relative overflow-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}

function SectionLink({ label }: { label: string }) {
  return (
    <a
      href={`#${label.toLowerCase()}`}
      className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/5 text-zinc-300 hover:text-white"
    >
      <span>{label}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-60"><path fill="currentColor" d="M9 18l6-6-6-6"/></svg>
    </a>
  );
}

function IconButton({ label }: { label: string }) {
  return (
    <button
      aria-label={label}
      className="grid place-items-center h-8 w-8 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
    >
      <span className="text-[10px] font-medium text-zinc-300">{label}</span>
    </button>
  );
}
