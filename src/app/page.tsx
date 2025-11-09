export default function Page() {
  const projects = [
    {
      title: "CTR Uplift via Gradient Boosting",
      tags: ["Python", "XGBoost", "A/B"],
      summary:
        "End‑to‑end pipeline improved CTR by 7.8% with calibrated probabilities and offline→online parity.",
    },
    {
      title: "Demand Forecasting – SKU/Store",
      tags: ["PyTorch", "Time Series"],
      summary:
        "Multi‑horizon model with hierarchical reconciliation; MAPE −12% across tail SKUs.",
    },
    {
      title: "Data App: Cohort Explorer",
      tags: ["Next.js", "DuckDB", "Vega"],
      summary:
        "Self‑serve retention explorer with cmd‑K palette and sharable deep links.",
    },
  ];

  return (
    <div className="relative h-full overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <section className="p-6 lg:p-12">
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2 glass p-6 lg:p-8 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)]">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Hi, I’m Bryan</h1>
            <p className="mt-2 text-zinc-400 max-w-2xl">
            I'm a Data Scientist
            
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <a className="panel group" href="#projects">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Featured Work</div>
                    <div className="text-sm text-zinc-400">Case studies & demos</div>
                  </div>
                  <Arrow />
                </div>
              </a>
              <a className="panel group" href="#blog">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Technical Notes</div>
                    <div className="text-sm text-zinc-400">Short posts & notebooks</div>
                  </div>
                  <Arrow />
                </div>
              </a>
            </div>
          </div>

          <div className="relative glass p-6 grid place-items-center overflow-hidden h-96 md:h-[320px]">
            <div className="absolute inset-0 pointer‐events‐none opacity-100 bg-cover bg-center"
       style={{ backgroundImage: "url('sidegraphs.jpg')" }} />
  <div className="relative z-10 glass p-8 lg:p-12">
    {/* your headline and text */}
  </div>
          </div>
        </div>

        <h2 id="projects" className="mt-10 text-xl font-semibold">Projects</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <article key={i} className="panel group">
              <div className="flex items-start justify-between gap-3">
                <div className="font-medium leading-tight">{p.title}</div>
                <span className="text-xs text-zinc-400">Case Study</span>
              </div>
              <p className="mt-2 text-sm text-zinc-400">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        .glass { @apply bg-white/5 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl; }
        .panel { @apply glass p-5 ring-1 ring-white/10 transition-transform duration-200 hover:-translate-y-0.5; }
        .tag { @apply px-2 py-0.5 rounded-full text-xs bg-white/10 ring-1 ring-white/10; }
        .shape-shadow { filter: drop-shadow(0 30px 25px rgba(0,0,0,0.45)); }
        .float { animation: float 6s ease-in-out infinite; }
        .float2 { animation: float2 7s ease-in-out infinite; }
        @keyframes float { 0%{ transform: translateY(0px) } 50%{ transform: translateY(-8px) } 100%{ transform: translateY(0px) } }
        @keyframes float2 { 0%{ transform: translateY(0px) } 50%{ transform: translateY(10px) } 100%{ transform: translateY(0px) } }
      `}</style>
    </div>
  );
}

function Arrow() {
  return (
    <div className="h-8 w-8 grid place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10 transition">
      <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-80"><path fill="currentColor" d="M13 5l7 7-7 7M5 12h14"/></svg>
    </div>
  );
}

function FauxScene() {
  return (
    <div className="relative w-full aspect-square">
      <div className="absolute right-4 bottom-6 rotate-[20deg]">
        <div className="shape-shadow h-28 w-44 rounded-xl bg-gradient-to-br from-indigo-500/70 to-indigo-300/60" />
      </div>

      <div className="absolute left-6 top-6 float">
        <div className="shape-shadow h-10 w-10 rounded-full bg-gradient-to-br from-teal-300 to-cyan-400" />
      </div>
      <div className="absolute left-24 top-16 float2">
        <div className="shape-shadow h-5 w-5 rounded-full bg-gradient-to-br from-sky-300 to-indigo-300" />
      </div>
      <div className="absolute right-8 top-8 float2">
        <div className="shape-shadow h-16 w-16 rounded-lg bg-gradient-to-br from-slate-200 to-slate-400" />
      </div>
      <div className="absolute left-10 bottom-10">
        <div className="shape-shadow h-16 w-16 rounded-full bg-gradient-to-br from-slate-400 to-slate-300" />
      </div>
      <div className="absolute right-16 bottom-16">
        <div className="shape-shadow h-12 w-24 rounded-xl bg-gradient-to-br from-emerald-400/80 to-teal-400/60" />
      </div>
    </div>
  );
}
