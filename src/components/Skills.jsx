import SectionLabel from "./SectionLabel";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-paper">
      <div className="max-w-5xl mx-auto">
        <SectionLabel index="02" name="skills" />

        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight mb-12">
          Tools I reach for.
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-accent-dark mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-body text-sm px-3 py-1.5 rounded-full bg-offwhite border border-ink/10 text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
