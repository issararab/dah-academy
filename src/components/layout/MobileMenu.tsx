import * as Dialog from "@radix-ui/react-dialog";
import { NAV_LINKS } from "../../content/nav";
import { ACADEMY_URL } from "../../content/site";
import { externalLinkProps, goToSection } from "./navigation";

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <button
          className="lg:hidden bg-transparent border border-cyan/30 text-cyan px-3 py-1.5 rounded-md cursor-pointer text-lg"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-navy-deep/70 z-[98] lg:hidden" />
        <Dialog.Content className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-xs bg-navy-deep border-l border-cyan/[.12] z-[99] p-8 flex flex-col gap-6 lg:hidden">
          <Dialog.Title className="font-heading font-extrabold text-cyan">
            Menu
          </Dialog.Title>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...externalLinkProps(l.external)}
              onClick={(e) => {
                onOpenChange(false);
                if (!l.external) goToSection(e, l.href);
              }}
              className="text-[rgba(232,238,255,.8)] text-base text-left"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              onOpenChange(false);
              window.open(ACADEMY_URL, "_blank", "noopener,noreferrer");
            }}
            className="btn-gradient rounded-lg font-semibold text-sm px-5 py-3 mt-2"
          >
            Join the Academy →
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
