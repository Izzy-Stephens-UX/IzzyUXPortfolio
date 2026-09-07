interface NeoParticipantChipProps {
  id: string;
  name: string;
  description: string;
}

export default function NeoParticipantChip({ id, name, description }: NeoParticipantChipProps) {
  return (
    <div className="border-2 border-[var(--ink)] bg-[var(--bg-card)] rounded-[5px] p-5 flex-1 min-w-[180px] shadow-[4px_4px_0px_0px_var(--teal)]">
      <div className="font-['JetBrains_Mono'] text-[11px] text-[var(--red)] mb-2">{id}</div>
      <div className="font-['Bruno_Ace'] text-[18px] mb-1">{name}</div>
      <div className="font-['Montserrat'] text-[13px] text-[var(--ink-muted)]">{description}</div>
    </div>
  );
}
