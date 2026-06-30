import SectionLabel from "./SectionLabel";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 bg-paper">
      <div className="max-w-5xl mx-auto">
        <SectionLabel index="04" name="projects" />

        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight mb-12">
          Things I've built.
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <article
              key={proj.title}
              className="group bg-offwhite border border-ink/10 rounded-2xl p-6 flex flex-col hover:border-accent/40 hover:shadow-[0_4px_24px_-8px_rgba(217,119,87,0.25)] transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-xl text-ink group-hover:text-accent-dark transition-colors">
                {proj.title}
              </h3>
              <p className="font-body text-sm text-slate leading-relaxed mt-2 flex-1">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {proj.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] px-2 py-1 rounded bg-ink/5 text-slate"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-5">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-accent"
                  >
                    GitHub →
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-accent"
                  >
                    Live demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
