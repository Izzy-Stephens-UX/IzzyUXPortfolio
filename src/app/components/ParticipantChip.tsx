interface ParticipantChipProps {
  id: string;
  name: string;
  description: string;
}

export default function ParticipantChip({ id, name, description }: ParticipantChipProps) {
  return (
    <div className="border border-[var(--line)] bg-[var(--bg-card)] p-5 hover:border-[var(--red)] transition-colors flex-1 min-w-[180px]">
      <div className="font-['JetBrains_Mono'] text-[11px] text-[var(--red)] mb-2">
        {id}
      </div>
      <div className="font-['Fraunces'] text-[20px] text-[var(--ink)] mb-1" style={{ fontWeight: 400 }}>
        {name}
      </div>
      <div className="font-['Source_Serif_4'] text-[13px] text-[var(--ink-muted)]">
        {description}
      </div>
    </div>
  );
}
