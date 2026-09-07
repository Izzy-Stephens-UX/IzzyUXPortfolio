import NeoLayout from '../components/neo/NeoLayout';
import NeoWorkCard from '../components/neo/NeoWorkCard';

const items = [
  {
    tag: 'UX Research · Solo · 16 weeks',
    title: 'Goblins',
    description:
      "Designed and led Goblins' first formal usability study, screener through founder readout. All five participants read the same feature backwards — and the resulting redesign is now in development.",
    to: '/work/goblins',
    accent: 'pink' as const,
  },
  {
    tag: 'Research · Prompt Engineering',
    title: 'Bias Audit',
    description:
      'Caught a profile-scoring prompt rewarding communication style over substance before it launched, rebuilt it, then designed the 11-labeler taxonomy and human-in-the-loop pipeline behind it.',
    to: '/work/bias-audit',
    accent: 'teal' as const,
  },
  {
    tag: 'Side project · Active',
    title: 'Job Search Scoring Tool',
    description:
      'A lightweight tool that takes job descriptions, runs them through Claude, and scores them against my criteria — role clarity, research-forward culture, AI fluency.',
    to: '/work/job-search-tool',
    accent: 'yellow' as const,
  },
  {
    tag: 'Design · Solo project',
    title: 'Meridian',
    description:
      'A narrative engine experiment testing branching story structures and player agency. Pure text interface, zero graphics — designed to feel like a book that responds to you.',
    to: '/work/meridian',
    accent: 'pink' as const,
    cta: 'Play the prototype',
  },
];

export default function WorkPage() {
  return (
    <NeoLayout>
      <section className="max-w-[1280px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="font-['Montserrat'] font-medium text-[16px] sm:text-[20px] mb-4">{'// Work'}</div>
        <h1 className="font-['Bruno_Ace'] text-[30px] sm:text-[44px] leading-[1.15] tracking-[-0.02em] mb-16 max-w-[720px]">
          Research, design, and the occasional AI prompt that needed a rewrite.
        </h1>
        <div className="grid sm:grid-cols-2 gap-8">
          {items.map((item) => (
            <NeoWorkCard key={item.to} {...item} />
          ))}
        </div>
      </section>
    </NeoLayout>
  );
}
