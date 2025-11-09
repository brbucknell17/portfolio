// app/page.tsx — cleaned, responsive, and production‑ready
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

// 1) Make sure Tailwind is installed and working.
// 2) Put the CSS utilities shown below into your global CSS (e.g., app/globals.css).
// 3) Drop this file into app/page.tsx and run: npm run dev

export default function Page() {
  const projects = [
    {
      title: "CTR Uplift via Gradient Boosting",
      tags: ["Python", "XGBoost", "A/B"],
      summary:
        "End‑to‑end pipeline improved CTR by 7.8% with calibrated probabilities and offline→online parity.",
      href: "#",
    },
    {
      title: "Demand Forecasting – SKU/Store",
      tags: ["PyTorch", "Time Series"],
      summary:
        "Multi‑horizon model with hierarchical reconciliation; MAPE −12% across tail SKUs.",
      href: "#",
    },
    {
      title: "Data App: Cohort Explorer",
      tags: ["Next.js", "DuckDB", "Vega"],
      summary:
        "Self‑serve retention explorer with cmd‑K palette and sharable deep links.",
      href: "#",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100">
      {/* subtle dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <main className="relative z-10 p-6 lg:p-12">
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {/* Hero */}
          <section className="glass p-6 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)] lg:col-span-2 lg:p-8">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Hi, I’m Bryan</h1>
            <p className="mt-2 max-w-2xl text-slate-300">
              I’m a data scientist who blends analytics, ethical AI, and nature‑inspired design.
              I build decision tools, forecasting systems, and polished data apps.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a className="panel group" href="#projects">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Featured Work</div>
                    <div className="text-sm text-slate-400">Case studies & demos</div>
                  </div>
                  <Arrow />
                </div>
              </a>
              <a className="panel group" href="#notes">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Technical Notes</div>
                    <div className="text-sm text-slate-400">Short posts & notebooks</div>
                  </div>
                  <Arrow />
                </div>
              </a>
            </div>
          </section>

          {/* Right feature image / hero visual */}
          <section className="relative grid h-96 place-items-center overflow-hidden md:h-[320px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/sidegraphs.jpg')" }}
              aria-hidden
            />
            <div className="glass relative z-10 p-8 text-center">
              <p className="text-sm text-slate-200">Analytics • Forecasting • LLM Apps</p>
            </div>
          </section>
        </div>

        {/* Projects */}
        <h2 id="projects" className="mt-10 text-xl font-semibold">Projects</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="panel group">
              <div className="flex items-start justify-between gap-3">
                <div className="font-medium leading-tight">{p.title}</div>
                <a href={p.href} className="inline-flex items-center gap-1 text-xs text-slate-300 hover:underline">
                  View <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
              <p className="mt-2 text-sm text-slate-400">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Contact */}
        <section className="mt-12">
          <h2 className="mb-3 text-xl font-semibold">Get in touch</h2>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:you@example.com" className="btn-outline">
              <Mail className="h-4 w-4" /> you@example.com
            </a>
            <a href="https://github.com/" className="btn-outline">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/" className="btn-outline">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function Arrow() {
  return (
    <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 transition group-hover:bg-white/10">
      <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-80">
        <path fill="currentColor" d="M13 5l7 7-7 7M5 12h14" />
      </svg>
    </div>
  );
}

/* =========================================================
   Paste this into app/globals.css (or a dedicated CSS file)
   ========================================================= */
/*
.glass { @apply bg-white/5 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl; }
.panel { @apply glass p-5 transition-transform duration-200 hover:-translate-y-0.5; }
.tag { @apply px-2 py-0.5 rounded-full text-xs bg-white/10 ring-1 ring-white/10; }
.btn-outline { @apply inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-slate-200 hover:bg-white/5; }
*/
