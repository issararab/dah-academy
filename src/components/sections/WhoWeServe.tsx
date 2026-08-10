import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

const ITEMS = [
  "Data analysts, scientists & engineers advancing their careers",
  "Business analysts transitioning into data roles",
  "AI-curious managers and leaders",
  "Companies building data capability from the ground up",
  "Enterprises needing AI/data maturity",
];

export function WhoWeServe() {
  return (
    <section id="serve" className="px-[5vw] py-24 bg-navy">
      <SectionHeading
        eyebrow="Who We Serve"
        title="Built for Ambitious Professionals"
        intro="Whether you're levelling up or leading transformation, DAH Academy meets you where you are."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ITEMS.map((item, i) => (
          <FadeIn key={item} delay={i * 0.07}>
            <div className="card-hover flex items-start gap-4 bg-white/[.025] border border-white/[.06] rounded-[10px] px-6 py-5">
              <div className="shrink-0 w-2 h-2 rounded-full bg-cyan mt-2.5" />
              <span className="text-[.94rem] leading-relaxed">{item}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
