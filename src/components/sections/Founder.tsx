import { FOUNDER } from "../../content/founder";
import { FadeIn } from "../ui/FadeIn";
import { InitialsAvatar } from "../ui/InitialsAvatar";
import { SectionHeading } from "../ui/SectionHeading";

export function Founder() {
  return (
    <section id="founder" className="px-[5vw] py-24 bg-navy-mid">
      <SectionHeading eyebrow="The Founder" title="Meet the Person Behind DAH Academy" />
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 items-center bg-white/[.025] border border-cyan/[.14] rounded-[18px] p-8 md:p-10">
          <InitialsAvatar
            photoSrc={FOUNDER.photo}
            initials={FOUNDER.initials}
            alt={FOUNDER.name}
          />
          <div>
            <h3 className="font-heading font-bold text-[1.3rem] mb-1">{FOUNDER.name}</h3>
            <p className="text-cyan text-sm font-medium mb-5">{FOUNDER.title}</p>
            <div className="flex flex-col gap-4">
              {FOUNDER.paragraphs.map((p, i) => (
                <p key={i} className="text-[.94rem] text-[rgba(200,215,255,.65)] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
