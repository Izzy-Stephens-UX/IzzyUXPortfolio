interface StatCardProps {
  number: string;
  label: string;
  context?: string;
}

export default function StatCard({ number, label, context }: StatCardProps) {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--line)] p-8 flex flex-col items-center justify-center">
      <div
        className="font-['Fraunces'] text-[56px] text-[var(--red)] mb-1"
        style={{ fontWeight: 300, letterSpacing: '-0.03em' }}
      >
        {number}
      </div>
      <div className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--ink-soft)] text-center mb-1">
        {label}
      </div>
      {context && (
        <div className="font-['JetBrains_Mono'] text-[9px] text-[var(--ink-muted)] text-center tracking-[0.06em]">
          {context}
        </div>
      )}
    </div>
  );
}
