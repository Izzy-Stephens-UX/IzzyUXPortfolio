import type { ReactNode } from 'react';

export default function HighlightWord({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block px-2 py-0.5 -rotate-1 bg-[var(--yellow)] border-2 border-[var(--ink)] rounded-[5px] shadow-[4px_4px_0px_0px_var(--bg)]">
      {children}
    </span>
  );
}
