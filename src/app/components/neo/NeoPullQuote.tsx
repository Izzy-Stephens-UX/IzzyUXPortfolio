interface NeoPullQuoteProps {
  quote: string;
  attribution: string;
}

export default function NeoPullQuote({ quote, attribution }: NeoPullQuoteProps) {
  return (
    <div className="border-l-[6px] border-[var(--ink)] pl-6 py-2 mb-8">
      <p className="font-['Bruno_Ace'] text-[20px] sm:text-[24px] leading-[1.4] mb-4">&ldquo;{quote}&rdquo;</p>
      <div className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
        {attribution}
      </div>
    </div>
  );
}
