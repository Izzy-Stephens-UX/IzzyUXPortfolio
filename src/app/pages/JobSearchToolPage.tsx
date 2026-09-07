import { Link } from 'react-router-dom';
import NeoLayout from '../components/neo/NeoLayout';
import NeoPlaceholderBox from '../components/neo/NeoPlaceholderBox';

export default function JobSearchToolPage() {
  return (
    <NeoLayout>
      <section className="max-w-[1000px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--ink-muted)] mb-4">
          Side project · Active
        </div>
        <h1 className="font-['Bruno_Ace'] text-[30px] sm:text-[44px] leading-[1.1] tracking-[-0.02em] mb-3">
          Job Search Scoring Tool
        </h1>
        <p className="font-['Montserrat'] italic text-[16px] sm:text-[18px] text-[var(--ink-muted)] mb-10">
          Claude + spreadsheets = faster applications
        </p>

        <p className="font-['Montserrat'] text-[16px] sm:text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-4">
          I built a lightweight tool that takes job descriptions, runs them through Claude, and scores them
          against my criteria (role clarity, research-forward culture, AI fluency). Output is a ranked list with
          reasoning.
        </p>
        <p className="font-['Montserrat'] text-[16px] sm:text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-10">
          Saves me 2-3 hours a week and surfaces roles I would've scrolled past. It's a janky spreadsheet + API
          workflow, but it works.
        </p>

        <NeoPlaceholderBox label="[ gif demo ]" />
        <div className="border-2 border-t-0 border-[var(--ink)] rounded-b-[5px] px-6 py-4 mb-10 -mt-[2px]">
          <div className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-[var(--red)] mb-1">
            In action
          </div>
          <div className="font-['Montserrat'] italic text-[13px] text-[var(--ink-muted)]">
            Input → Claude scoring → ranked output
          </div>
        </div>

        <Link
          to="/contact"
          className="font-['Bruno_Ace_SC'] text-[13px] tracking-[0.1em] underline inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          Ask me about it <span>→</span>
        </Link>
      </section>
    </NeoLayout>
  );
}
