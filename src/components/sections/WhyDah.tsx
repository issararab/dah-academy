import aiReadinessCover from "../../assets/misc/ai-readiness-cover.jpg?w=600&format=webp";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

const POINTS = [
  {
    n: "01",
    title: "We build data confidence",
    desc: "Not just tool knowledge: real decision power and the ability to lead with data.",
  },
  {
    n: "02",
    title: "Strategic, not hype-driven",
    desc: "Our content cuts through the noise. No buzzwords: just what works in practice.",
  },
  {
    n: "03",
    title: "Clear, not academic",
    desc: "Complex ideas made accessible. You'll understand it AND know how to use it.",
  },
  {
    n: "04",
    title: "Expert, not arrogant",
    desc: "World-class instruction delivered with respect for where you are in your journey.",
  },
];

const TAGS = ["Python", "SQL", "dbt", "Power BI", "LLMs"];

export function WhyDah() {
  return (
    <section id="why" className="px-[5vw] py-24 bg-navy">
      <SectionHeading
        eyebrow="Why DAH Academy"
        title={
          <>
            Strategy Over Hype.
            <br />
            Clarity Over Complexity.
          </>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-5">
          {POINTS.map((p, i) => (
            <FadeIn key={p.n} delay={i * 0.08}>
              <div className="card-hover flex gap-5 p-6 bg-white/[.025] border border-white/[.06] rounded-xl">
                <div className="num-badge text-[2rem] shrink-0 w-10">{p.n}</div>
                <div>
                  <h4 className="font-semibold mb-1 text-[.95rem]">{p.title}</h4>
                  <p className="text-[.88rem] text-[rgba(200,215,255,.6)] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <div className="bg-white/[.025] border border-cyan/[.14] rounded-[18px] p-10 text-center">
            <div className="w-full max-w-[280px] aspect-video rounded-2xl overflow-hidden border-2 border-cyan/25 mx-auto mb-6 shadow-[0_0_32px_rgba(0,212,255,.18)] animate-float-avatar">
              <img
                src={aiReadinessCover}
                alt="AI readiness illustration"
                width={600}
                height={319}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-heading font-bold text-[1.15rem] mb-3 leading-snug text-cyan">
              "We don't just teach tools.<br />
              We build AI readiness."
            </div>
            <div className="flex justify-center gap-4 mt-7 flex-wrap">
              {TAGS.map((t) => (
                <span
                  key={t}
                  className="bg-cyan/[.09] border border-cyan/20 rounded-full px-3.5 py-1.5 text-sm text-cyan font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
