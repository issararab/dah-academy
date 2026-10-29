import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo-mark.png?w=100&format=webp";
import { NAV_LINKS } from "../../content/nav";
import { ACADEMY_URL } from "../../content/site";
import { MobileMenu } from "./MobileMenu";
import { externalLinkProps, goToSection } from "./navigation";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-[5vw] py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-navy/[.92] backdrop-blur-xl border-b border-cyan/[.09]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <a href="#top" className="flex items-center gap-2.5" aria-label="DAH Academy home">
        <img src={logo} alt="DAH Academy" className="h-9 w-auto" width={36} height={36} />
        <span className="font-heading font-extrabold text-cyan tracking-tight">
          DAH Academy
        </span>
      </a>

      <div className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            {...externalLinkProps(l.external)}
            onClick={l.external ? undefined : (e) => goToSection(e, l.href)}
            className="text-[rgba(232,238,255,.65)] text-sm font-medium tracking-wide hover:text-cyan transition-colors"
          >
            {l.label}
          </a>
        ))}
        <button
          onClick={() => window.open(ACADEMY_URL, "_blank", "noopener,noreferrer")}
          className="btn-gradient rounded-lg font-semibold text-sm px-5 py-2 shadow-[0_0_24px_rgba(0,212,255,.2)]"
        >
          Join the Academy →
        </button>
      </div>

      <MobileMenu open={menuOpen} onOpenChange={setMenuOpen} />
    </nav>
  );
}
