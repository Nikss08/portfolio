import SectionLabel from "./SectionLabel";
import { about, profile } from "../data/content";

export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionLabel index="01" name="about" />

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight">
            A bit about how I work.
          </h2>

          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-slate leading-relaxed text-base sm:text-lg">
                {p}
              </p>
            ))}
            <p className="font-mono text-xs text-slate/70 pt-2">{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
