import { ACADEMY_URL, SUBSCRIBE_URL } from "../../content/site";

const STATS: [string, string][] = [
  ["5+", "Program Tracks"],
  ["100%", "Applied Learning"],
  ["0", "Hype. Just Results."],
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-[5vw] pt-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(0,71,204,.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(0,212,255,.06) 0%, transparent 50%)",
        }}
      />
      <div className="hidden md:block absolute top-[15%] right-[-8%] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,.1)_0%,transparent_70%)] animate-float pointer-events-none" />
      <div className="hidden md:block absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(26,108,255,.08)_0%,transparent_70%)] animate-float-slow pointer-events-none" />
      <div
        className="absolute inset-0 opacity-45 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(0,212,255,.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-[2] max-w-full">
        <div className="flex flex-col gap-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-cyan/10 border border-cyan/25 px-4 py-1.5 rounded-full w-fit text-[.8rem] font-medium text-cyan tracking-wider uppercase">
            <span className="w-[7px] h-[7px] rounded-full bg-cyan animate-pulse2" />
            Data &amp; AI Excellence Hub
          </div>
          <h1 className="font-heading font-black text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.12] tracking-tight max-w-2xl">
            Turning Data Into
            <br />
            <span className="text-gradient">Business Impact</span>
          </h1>
          <p className="text-[rgba(200,215,255,.7)] text-[1.05rem] max-w-lg leading-[1.72] font-light">
            We bridge the gap between theory and execution through applied,
            business-driven education — for professionals ready to drive real
            results with data and AI.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => window.open(ACADEMY_URL, "_blank", "noopener,noreferrer")}
              className="btn-gradient rounded-lg font-semibold text-[.95rem] px-8 py-3.5 shadow-[0_0_32px_rgba(0,212,255,.28)]"
            >
              Join the Academy →
            </button>
            <button
              onClick={() => window.open(SUBSCRIBE_URL, "_blank", "noopener,noreferrer")}
              className="btn-outline rounded-lg font-medium text-[.95rem] px-8 py-3.5"
            >
              Subscribe to Newsletter ↗
            </button>
          </div>
        </div>
        <div className="mt-14 flex gap-14 flex-wrap animate-fade-up [animation-delay:.45s]">
          {STATS.map(([n, l]) => (
            <div key={l}>
              <div className="stat-num">{n}</div>
              <div className="text-[.78rem] text-[rgba(200,215,255,.5)] uppercase tracking-wider mt-1">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
