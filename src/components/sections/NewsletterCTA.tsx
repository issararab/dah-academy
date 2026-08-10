import { ACADEMY_URL, SUBSCRIBE_URL } from "../../content/site";
import { FadeIn } from "../ui/FadeIn";

export function NewsletterCTA() {
  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-gradient-to-br from-[#001466] to-[#0047cc] border-y border-cyan/20 px-[5vw] py-24 text-center"
    >
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,212,255,.14)_0%,transparent_70%)] pointer-events-none" />
      <FadeIn>
        <h2 className="relative font-heading font-black text-[clamp(1.8rem,3vw,2.6rem)] mb-4">
          Ready to Drive Real Impact?
        </h2>
        <p className="text-[rgba(240,244,255,.7)] mb-10 text-[1.05rem] max-w-xl mx-auto leading-relaxed">
          Join the DAH Academy community and start turning your data skills
          into business results — starting today.
        </p>
        <div className="relative flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => window.open(ACADEMY_URL, "_blank", "noopener,noreferrer")}
            className="btn-gradient rounded-lg font-semibold text-[.95rem] px-8 py-3.5 shadow-[0_0_36px_rgba(0,212,255,.3)]"
          >
            Join the Academy on Skool →
          </button>
          <button
            onClick={() => window.open(SUBSCRIBE_URL, "_blank", "noopener,noreferrer")}
            className="bg-transparent border border-white/30 text-white rounded-lg font-medium text-[.95rem] px-8 py-3.5 hover:bg-white/10 hover:border-white/50 transition-colors"
          >
            Subscribe to Newsletter ↗
          </button>
        </div>
      </FadeIn>
    </section>
  );
}
