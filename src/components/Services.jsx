import { Rocket, Layout, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Digitale Strategie',
    desc: 'Von Positionierung bis Roadmap – wir definieren klare Ziele und Wege dorthin.',
  },
  {
    icon: Layout,
    title: 'Websites & Interfaces',
    desc: 'Hochperformante Websites, Webapps und Design-Systeme mit Fokus auf UX.',
  },
  {
    icon: Sparkles,
    title: 'Brand & Motion',
    desc: 'Markenauftritte, Mikro-Interaktionen und Motion Design, die sich einprägen.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Fähigkeiten</h2>
          <p className="text-white/60 text-sm max-w-md">
            Schlanke Prozesse, enge Zusammenarbeit und greifbare Ergebnisse. Wir bauen nur, was Wirkung zeigt.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 hover:bg-white/[0.06] transition">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-400/30 to-indigo-500/30 border border-white/10 flex items-center justify-center">
                <Icon className="text-white" size={22} />
              </div>
              <h3 className="mt-4 text-white font-medium text-lg">{title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
