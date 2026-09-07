import { Link } from 'react-router-dom';
import MeridianEmbed from '../components/MeridianEmbed';

// The one page that intentionally breaks from the site's neubrutalist system —
// Meridian keeps its own dark terminal identity.
export default function MeridianPage() {
  return (
    <div className="min-h-screen bg-[#050403] text-[#E8E4F0]">
      <div className="max-w-[900px] mx-auto px-6 sm:px-10 py-16">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#39ff6e] mb-12 hover:opacity-70 transition-opacity"
        >
          ← Back to Work
        </Link>

        <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[#39ff6e] mb-4">
          Design · Solo project
        </div>
        <h1 className="font-['JetBrains_Mono'] text-[28px] sm:text-[36px] mb-3 tracking-[0.04em]">MERIDIAN</h1>
        <p className="font-['JetBrains_Mono'] text-[13px] text-[#9490A8] mb-4">
          A text-based adventure prototype
        </p>
        <p className="font-['JetBrains_Mono'] text-[13px] leading-[1.7] text-[#9490A8] mb-12 max-w-[640px]">
          A narrative engine experiment I built to test branching story structures and player agency. Pure text
          interface, zero graphics. Designed to feel like you're reading a book that responds to you. Currently
          shelved, but taught me a lot about interaction pacing.
        </p>

        <MeridianEmbed />
      </div>
    </div>
  );
}
