import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Futuristisch. Interaktiv. Minimalistisch.
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
            Sünder Digital — Ihre Agentur für digitale Erlebnisse
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Wir gestalten performante Websites, Markenauftritte und Interfaces, die sich lebendig anfühlen und messbar wirken.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90">
              Projekt anfragen
            </a>
            <a href="#work" className="inline-flex items-center rounded-md border border-white/20 text-white px-5 py-3 text-sm font-medium hover:bg-white/10">
              Unsere Arbeiten
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
