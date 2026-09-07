import NeoLayout from '../components/neo/NeoLayout';
import NeoPlaceholderBox from '../components/neo/NeoPlaceholderBox';

const storyBlocks = [
  {
    title: 'Where I started',
    body: '[Placeholder — add the story of how you got into UX here. What was the moment or path that led you in?]',
  },
  {
    title: 'What drives me',
    body: '[Placeholder — what do you care about in this work? What makes a study or a design decision feel worth doing?]',
  },
  {
    title: "What I'm looking for",
    body: "[Placeholder — describe the kind of team, role, or problem space you're chasing next.]",
  },
];

export default function AboutPage() {
  return (
    <NeoLayout>
      <section className="max-w-[900px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="font-['Montserrat'] font-medium text-[16px] sm:text-[20px] mb-4">{'// About'}</div>
        <h1 className="font-['Bruno_Ace'] text-[30px] sm:text-[46px] leading-[1.15] tracking-[-0.02em] mb-6">
          The personal version.
        </h1>
        <p className="font-['Montserrat'] text-[15px] sm:text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-16 max-w-[640px]">
          [Placeholder — a short personal intro paragraph goes here.]
        </p>

        <NeoPlaceholderBox label="[ your photo ]" aspect="aspect-[4/3]" />

        <div className="flex flex-col gap-10 mt-16">
          {storyBlocks.map((block) => (
            <div
              key={block.title}
              className="bg-[var(--pink)] border-2 border-[var(--ink)] rounded-[5px] px-6 py-10 sm:px-12 sm:py-12 shadow-[8px_8px_0px_0px_var(--teal)]"
            >
              <h3 className="font-['Montserrat'] font-semibold text-[22px] sm:text-[28px] mb-4">{block.title}</h3>
              <p className="font-['Montserrat'] text-[15px] sm:text-[16px] leading-[1.7]">{block.body}</p>
            </div>
          ))}
        </div>
      </section>
    </NeoLayout>
  );
}
