import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 px-6 overflow-hidden">
      {/* ambient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] w-[36rem] h-[36rem] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "var(--color-accent)" }}
      />

      <div className="max-w-5xl mx-auto relative">
        <p className="font-mono text-xs text-accent-dark tracking-wide mb-6">
          {`// available for opportunities`}
        </p>

        <h1 className="font-display font-bold text-ink leading-[1.05] text-5xl sm:text-6xl md:text-7xl tracking-tight">
          {profile.name}
        </h1>

        <p className="font-mono text-base sm:text-lg text-accent-dark mt-4 tracking-tight">
          {profile.role}
        </p>

        <p className="font-body text-lg text-slate max-w-xl mt-6 leading-relaxed">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-10">
          <a
            href="#projects"
            className="font-display font-semibold text-sm px-6 py-3 rounded-full bg-ink text-offwhite hover:bg-accent transition-colors"
          >
            View my work
          </a>
          <a
  href="/nikunj_cv.pdf"
  download="Nikunj_Mistry_CV.pdf"
  className="font-display font-semibold text-sm px-6 py-3 rounded-full border border-ink/20 text-ink hover:border-ink hover:bg-ink/5 transition-colors"
>
  Download Résumé
</a>
        </div>
      </div>
    </section>
  );
}
