import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`card-hover bg-white/[.03] border border-cyan/[.12] rounded-xl h-full ${className}`}
    >
      {children}
    </div>
  );
}
