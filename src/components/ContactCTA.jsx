export default function ContactCTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl text-white font-semibold">Bereit für das nächste Kapitel?</h3>
              <p className="mt-2 text-white/70">Erzählen Sie uns von Ihrer Idee. Wir melden uns innerhalb von 24 Stunden.</p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="mailto:hello@suender.digital"
                className="inline-flex items-center rounded-md bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90"
              >
                hello@suender.digital
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-white/50 text-xs">© {new Date().getFullYear()} Sünder Digital. Alle Rechte vorbehalten.</p>
      </div>
    </section>
  );
}
