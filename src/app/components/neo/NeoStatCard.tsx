interface NeoStatCardProps {
  number: string;
  label: string;
  context?: string;
}

export default function NeoStatCard({ number, label, context }: NeoStatCardProps) {
  return (
    <div className="bg-[var(--bg-card)] border-2 border-[var(--ink)] rounded-[5px] p-6 flex flex-col items-center justify-center text-center">
      <div className="font-['Bruno_Ace'] text-[36px] sm:text-[44px] text-[var(--red)] mb-1">{number}</div>
      <div className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--ink-soft)] mb-1">
        {label}
      </div>
      {context && (
        <div className="font-['JetBrains_Mono'] text-[9px] text-[var(--ink-muted)] tracking-[0.06em]">{context}</div>
      )}
    </div>
  );
}
