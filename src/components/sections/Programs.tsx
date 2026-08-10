import { Card } from "../ui/Card";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

const ITEMS = [
  {
    icon: "🎓",
    title: "Online Courses",
    desc: "Beginner to advanced and leadership tracks — learn at your own pace with real projects.",
  },
  {
    icon: "⚡",
    title: "Bootcamps",
    desc: "Intensive, project-based learning experiences. Go deep, go fast, come out transformed.",
  },
  {
    icon: "🏢",
    title: "Corporate Training",
    desc: "Custom learning paths for teams. Build data capability across your entire organisation.",
  },
  {
    icon: "📚",
    title: "eBooks & eGuides",
    desc: "Practical frameworks, benchmarks, and playbooks you can apply immediately.",
    anchor: "#books",
  },
  {
    icon: "🎙️",
    title: "Webinars & Workshops",
    desc: "Stay current with industry trends through live sessions with leading practitioners.",
  },
];

export function Programs() {
  return (
    <section id="programs" className="px-[5vw] py-24 bg-navy-mid">
      <SectionHeading
        eyebrow="Our Programs"
        title="Every Format. One Goal."
        intro="Choose how you learn. All paths lead to the same destination: confidence and impact."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ITEMS.map((c, i) => {
          const content = (
            <Card className="program-card relative p-8 overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue to-cyan scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              <div className="text-[2rem] mb-4">{c.icon}</div>
              <h3 className="font-heading font-bold text-[1.1rem] mb-2">{c.title}</h3>
              <p className="text-sm text-[rgba(200,215,255,.6)] leading-relaxed">
                {c.desc}
              </p>
            </Card>
          );
          return (
            <FadeIn key={c.title} delay={i * 0.07}>
              {c.anchor ? (
                <a href={c.anchor} className="block h-full">
                  {content}
                </a>
              ) : (
                content
              )}
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
