import type { ReactNode } from 'react';

interface NeoFindingCalloutProps {
  tag: string;
  title: string;
  children: ReactNode;
  resultLine?: string;
  accent?: 'pink' | 'tinted' | 'yellow';
}

const accentBg: Record<string, string> = {
  pink: 'bg-[var(--pink)]',
  tinted: 'bg-[var(--bg-tinted)]',
  yellow: 'bg-[var(--yellow)]/40',
};

export default function NeoFindingCallout({
  tag,
  title,
  children,
  resultLine,
  accent = 'pink',
}: NeoFindingCalloutProps) {
  return (
    <div className={`border-2 border-[var(--ink)] rounded-[5px] p-7 sm:p-9 mb-8 ${accentBg[accent]}`}>
      <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] mb-4">{tag}</div>
      <h3 className="font-['Bruno_Ace'] text-[24px] sm:text-[30px] mb-4">{title}</h3>
      <div className="font-['Montserrat'] text-[15px] sm:text-[16px] leading-[1.7] space-y-4">{children}</div>
      {resultLine && (
        <div className="border-t-2 border-[var(--ink)]/25 pt-4 mt-6">
          <div className="font-['JetBrains_Mono'] text-[12px]">{resultLine}</div>
        </div>
      )}
    </div>
  );
}
