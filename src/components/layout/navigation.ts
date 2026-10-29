import type { MouseEvent } from "react";

// Smooth-scroll to an on-page section and put its #hash in the address bar,
// so the URL (e.g. dahacademy.com/#books) can be copied and shared.
// Ctrl/Cmd/Shift/middle clicks are left to the browser (e.g. open in new tab).
export function goToSection(e: MouseEvent<HTMLAnchorElement>, href: string) {
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  if (window.location.hash !== href) {
    window.history.pushState(null, "", href);
  }
}

export function externalLinkProps(external?: boolean) {
  return external ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
