import logo from "../../assets/logo/logo.png";
import { ACADEMY_URL, LINKEDIN_URL, SUBSCRIBE_URL } from "../../content/site";

const LINKS = [
  { label: "Join the Academy", href: ACADEMY_URL },
  { label: "Newsletter", href: SUBSCRIBE_URL },
  { label: "LinkedIn", href: LINKEDIN_URL },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/[.06] px-[5vw] py-11">
      <div className="flex items-center justify-between flex-wrap gap-4 text-center md:text-left">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="DAH Academy" className="h-8 w-auto" width={32} height={32} />
          <span className="font-heading font-bold text-sm text-cyan">DAH Academy</span>
        </div>
        <p className="text-[rgba(200,215,255,.4)] text-sm">
          © 2026 DAH Academy — Data &amp; AI Excellence Hub. All rights reserved.
        </p>
        <div className="flex gap-6 justify-center">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan text-sm hover:opacity-80 transition-opacity"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
