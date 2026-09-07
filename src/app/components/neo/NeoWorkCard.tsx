import { Link } from 'react-router-dom';
import NeoPlaceholderBox from './NeoPlaceholderBox';

interface NeoWorkCardProps {
  tag: string;
  title: string;
  description: string;
  to: string;
  accent?: 'pink' | 'teal' | 'yellow';
  cta?: string;
}

const accentShadow: Record<string, string> = {
  pink: 'shadow-[8px_8px_0px_0px_var(--pink)]',
  teal: 'shadow-[8px_8px_0px_0px_var(--teal)]',
  yellow: 'shadow-[8px_8px_0px_0px_var(--yellow)]',
};

export default function NeoWorkCard({
  tag,
  title,
  description,
  to,
  accent = 'teal',
  cta = 'Read the case study',
}: NeoWorkCardProps) {
  return (
    <Link
      to={to}
      className={`group block bg-[var(--bg-card)] border-2 border-[var(--ink)] rounded-[5px] p-8 sm:p-10 ${accentShadow[accent]} transition-transform hover:-translate-y-1`}
    >
      <NeoPlaceholderBox label="[ cover image ]" />
      <div className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--ink-muted)] mt-6 mb-3">
        {tag}
      </div>
      <h3 className="font-['Bruno_Ace'] text-[28px] sm:text-[32px] mb-3">{title}</h3>
      <p className="font-['Montserrat'] text-[15px] leading-[1.65] text-[var(--ink-soft)] mb-6">{description}</p>
      <span className="font-['Bruno_Ace_SC'] text-[12px] tracking-[0.1em] underline inline-flex items-center gap-2 group-hover:gap-3 transition-all">
        {cta} <span>→</span>
      </span>
    </Link>
  );
}
