import { Card } from "../ui/Card";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

const ITEMS = [
  {
    icon: "🔨",
    title: "Applied Learning",
    desc: "Project-based courses that mirror real-world challenges, not toy examples.",
  },
  {
    icon: "🎯",
    title: "Expert-Led",
    desc: "Taught by practitioners who've implemented data strategies at enterprise scale.",
  },
  {
    icon: "📈",
    title: "Outcome-Focused",
    desc: "Every course ties technical skills directly to measurable business results.",
  },
  {
    icon: "💼",
    title: "Business-First",
    desc: "Learn how AI and data choices impact cost, risk, and ROI, not just accuracy.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="px-[5vw] py-24 bg-navy-mid">
      <SectionHeading
        eyebrow="Our Approach"
        title="Built for the Real World"
        intro="Every method is designed to move you from learning to doing, fast."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {ITEMS.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.08}>
            <Card className="p-7">
              <div className="w-[50px] h-[50px] rounded-[10px] bg-gradient-to-br from-blue/30 to-cyan/10 border border-cyan/[.18] flex items-center justify-center text-[1.6rem] mb-4">
                {c.icon}
              </div>
              <h3 className="font-heading font-bold text-[1.05rem] mb-2">{c.title}</h3>
              <p className="text-sm text-[rgba(200,215,255,.6)] leading-relaxed">
                {c.desc}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
