const cases = [
  {
    tag: 'E-Commerce',
    title: 'Skalierbare Shop-Plattform',
    desc: 'Migration auf Headless mit 38% Conversion-Lift und <200ms TTFB.',
  },
  {
    tag: 'SaaS',
    title: 'Onboarding neu gedacht',
    desc: 'Redesign und In-App-Guidance senkten Churn um 22%.',
  },
  {
    tag: 'Brand',
    title: 'Marken-Refresh',
    desc: 'Klarer, moderner Auftritt mit animierten Interaktionen.',
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Arbeiten</h2>
          <a href="#contact" className="text-sm text-cyan-300 hover:text-cyan-200">Projekt anfragen →</a>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <div className="aspect-[16/10] bg-gradient-to-br from-slate-800 to-slate-900" />
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-widest text-white/60">{c.tag}</span>
                <h3 className="mt-2 text-white font-medium">{c.title}</h3>
                <p className="mt-1 text-white/70 text-sm">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
