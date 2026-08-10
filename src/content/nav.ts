import { SUBSCRIBE_URL } from "./site";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Approach", href: "#approach" },
  { label: "Programs", href: "#programs" },
  { label: "Books", href: "#books" },
  { label: "Why DAH", href: "#why" },
  { label: "Newsletter", href: SUBSCRIBE_URL, external: true },
];
