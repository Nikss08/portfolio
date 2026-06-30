import SectionLabel from "./SectionLabel";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel index="03" name="experience" />

        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight mb-12">
          Where I've been.
        </h2>

        <div className="relative pl-8 space-y-12 before:absolute before:left-[3px] before:top-2 before:bottom-2 before:w-px before:bg-ink/10">
          {experience.map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-8 top-1.5 w-2 h-2 rounded-full bg-accent" />
              <p className="font-mono text-xs text-accent-dark mb-1">{item.period}</p>
              <h3 className="font-display font-semibold text-xl text-ink">{item.title}</h3>
              <p className="font-body text-sm text-slate mt-0.5">{item.org}</p>
              <p className="font-body text-base text-slate leading-relaxed mt-3 max-w-2xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
