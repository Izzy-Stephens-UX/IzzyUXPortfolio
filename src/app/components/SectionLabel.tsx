interface SectionLabelProps {
  number: string;
  label: string;
}

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.16em] text-[var(--red)]">
        {number}
      </span>
      <span className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.16em] text-[var(--ink-soft)]">
        ·
      </span>
      <span className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.16em] text-[var(--ink-soft)]">
        {label}
      </span>
      <div className="flex-1 h-px bg-[var(--line)]"></div>
    </div>
  );
}
