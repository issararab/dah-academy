import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}

export function SectionHeading({ eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <FadeIn>
      <div className="text-[.78rem] text-cyan font-semibold uppercase tracking-[.15em] mb-3">
        {eyebrow}
      </div>
      <h2 className="font-heading font-black text-[clamp(1.8rem,3vw,2.6rem)] mb-3">
        {title}
      </h2>
      {intro && (
        <p className="text-[rgba(200,215,255,.6)] max-w-xl mb-12 leading-relaxed">
          {intro}
        </p>
      )}
    </FadeIn>
  );
}
