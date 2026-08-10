import { ACADEMY_URL } from "../../content/site";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

const TRADITIONAL = [
  "Outdated tools & academic datasets",
  "Theory-heavy, project-light",
  "No focus on business ROI",
  "Slow to adopt LLMs & modern AI stacks",
  "Degrees that take years, not months",
  "No real-world stakeholder communication",
];

const DAH = [
  "Python, SQL, dbt, Power BI, LLMs",
  "Real projects with real business context",
  "Every skill tied to cost, risk & ROI",
  "AI-native curriculum — updated continuously",
  "Career-ready in weeks, not years",
  "Data storytelling & communication",
];

export function Gap() {
  return (
    <section id="gap" className="px-[5vw] py-24 bg-navy">
      <SectionHeading
        eyebrow="The Gap We Close"
        title="What Universities Don't Teach You"
        intro="Academia teaches theory. DAH Academy teaches what you actually need to land roles, drive decisions, and deliver results."
      />
      <FadeIn delay={0.1}>
        <div className="flex flex-col md:flex-row items-stretch rounded-2xl overflow-hidden border border-cyan/[.14]">
          <div className="flex-1 p-8 bg-white/[.025]">
            <div className="flex items-center gap-3 font-heading font-extrabold text-[1.05rem] text-[rgba(200,215,255,.55)] mb-5 pb-4 border-b border-white/[.07]">
              <span className="text-xl">🎓</span>Traditional Education
            </div>
            <ul className="flex flex-col gap-3 list-none">
              {TRADITIONAL.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[.92rem] leading-snug text-[rgba(200,215,255,.5)]">
                  <span className="mt-0.5 text-[.85rem] text-[#ff5566] shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center py-4 md:py-0 bg-black/25 text-white/[.15] font-heading font-black tracking-[.2em] text-[.95rem] [writing-mode:horizontal-tb] md:[writing-mode:vertical-lr] px-4">
            VS
          </div>
          <div className="flex-1 p-8 bg-blue/10 border-t md:border-t-0 md:border-l border-cyan/[.14]">
            <div className="flex items-center gap-3 font-heading font-extrabold text-[1.05rem] text-cyan mb-5 pb-4 border-b border-white/[.07]">
              <span className="text-xl">⚡</span>DAH Academy
            </div>
            <ul className="flex flex-col gap-3 list-none">
              {DAH.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[.92rem] leading-snug text-[#e8eeff]">
                  <span className="mt-0.5 text-[.85rem] text-cyan shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-7 text-center text-[rgba(200,215,255,.55)] text-[.95rem]">
          Start your modern data &amp; AI career —{" "}
          <button
            onClick={() => window.open(ACADEMY_URL, "_blank", "noopener,noreferrer")}
            className="bg-transparent border-none cursor-pointer text-cyan font-semibold text-[.95rem] p-0"
          >
            join the academy today →
          </button>
        </div>
      </FadeIn>
    </section>
  );
}
