interface NeoPlaceholderBoxProps {
  label: string;
  aspect?: string;
}

export default function NeoPlaceholderBox({ label, aspect = 'aspect-video' }: NeoPlaceholderBoxProps) {
  return (
    <div
      className={`${aspect} w-full border-2 border-dashed border-[var(--ink)] rounded-[5px] flex items-center justify-center bg-[var(--bg-elevated)]`}
    >
      <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-[var(--ink-muted)] text-center px-4">
        {label}
      </span>
    </div>
  );
}
