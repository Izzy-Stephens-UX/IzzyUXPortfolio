import { Link } from 'react-router-dom';
import NeoLayout from '../components/neo/NeoLayout';
import HighlightWord from '../components/neo/HighlightWord';
// @ts-expect-error — resolved by the figma-asset-resolver vite plugin
import heroIllustration from 'figma:asset/hero-illustration.png';
// @ts-expect-error — resolved by the figma-asset-resolver vite plugin
import ellipseDot from 'figma:asset/ellipse-dot.svg';
// @ts-expect-error — resolved by the figma-asset-resolver vite plugin
import zigZag from 'figma:asset/zig-zag.svg';

const shortVersion = [
  {
    label: 'Research',
    body: "Designed and led Goblins' first formal usability study, screener through founder readout. All five participants read the same feature backwards, and the resulting redesign is now in development.",
  },
  {
    label: 'Trust & Safety',
    body: 'Caught a profile-scoring prompt rewarding communication style over substance before it launched, rebuilt it, then designed the 11-labeler taxonomy and human-in-the-loop pipeline behind it.',
  },
  {
    label: 'Design',
    body: 'Research-driven design, start to finish: flows, wireframes, and high-fidelity Figma prototypes. On Icebreaker, a dating app concept, one rule came before any screens: nothing that reduces anxiety gets paywalled.',
  },
];

const longVersion = [
  {
    title: 'Research',
    paragraphs: [
      "I don't start with the screen, I start with what's actually breaking, and that isn't always where the team assumes it is. The obvious study was the scheduling section, but I made the case for scoping it around onboarding, because it's the first impression and the biggest drop-off risk, and at pre-seed there was no analytics in place telling us where people were leaving. Users had to clear the entire onboarding and approval flow before they ever reached a scheduling screen, so plenty could have abandoned ship long before the part we were planning to study. The founder backed the rescope, and it turned out to be the right call.",
      "The best session I ran went nearly two hours because the participant refused to follow the happy path. He tested the age gate by entering a birthdate 17 years and 350 days out, went through profile creation backwards, and surfaced things nobody on the team had come close to finding: availability slots you could delete but not edit, a one-minute dead zone at 11:59 PM because the scheduler wouldn't cross midnight, and a privacy mode that showed your photos by default, which was the opposite of what he expected privacy to mean. If everyone had completed things in the intended order, we'd never have found any of it.",
      "The finding that carried the most weight wasn't a single bug though, it was that all five participants read [feature] the same wrong way. Once that was in front of the founder as five out of five instead of one person's opinion, she changed the roadmap in the room, and [X] of the findings are spec'd and in development now.",
    ],
  },
  {
    title: 'Design',
    paragraphs: [
      "I stay in the room through the build. The platform was developer-built with no UX designer involved, so I'm in the biweekly dev meetings translating findings into spec'd changes that are actually moving into development, instead of recommendations that get filed and forgotten. Handoff is where most good research goes to die.",
      "I also think design owes the user more than a conversion rate. One study surfaced that you couldn't change your display name after creating a profile, which sounds like a minor gap until you consider someone who entered a legal name and wants a gamer tag, or someone changing their name during a transition, and the only workaround was abandoning the account. When I designed Icebreaker's premium tier I set one rule before I drew a single screen: nothing that reduces anxiety gets paywalled.",
    ],
  },
  {
    title: 'Trust & Safety',
    paragraphs: [
      "Bias shows up as a pattern in the output before anyone can name who it's hurting. A profile-review prompt I audited was asking users to write descriptively and paint a picture with their words, which sounds harmless until you notice it's scoring a communication style rather than the substance of what someone actually said. It hadn't been tested, so I asked to take a swing at it, and I rebuilt it against mock and real profiles until the output held up.",
      "When we changed models months later I rebuilt it from secondary research instead of instinct, and the most useful thing I found was that there's no single style to design around, so any blanket allowance is incoherent. The strongest evidence in the literature is that bias against a communicator largely disappears once you judge content instead of delivery, and AI detectors are the cautionary version, having falsely flagged 61.3% of non-native-speaker essays because direct, low-variability prose reads as machine-generated. That's the default failure mode, not the edge case. I also stress-tested my own fix and found that scoring for specificity is safer than scoring for warmth but still not neutral, since it penalizes associative and big-picture styles, so it can't be a single gate.",
    ],
  },
];

export default function LandingPage() {
  return (
    <NeoLayout>
      <section className="max-w-[1280px] mx-auto px-6 sm:px-10 pt-10 sm:pt-16">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left panel — name, headline, pitch */}
          <div className="flex-1 bg-[var(--pink)] border-2 border-[var(--ink)] rounded-[5px] px-6 py-10 sm:px-12 sm:py-14">
            <div className="flex items-center gap-3 flex-wrap mb-5">
              <span className="font-['Montserrat'] font-medium text-[16px] sm:text-[20px]">Izzy Stephens</span>
              <img src={ellipseDot} alt="" className="w-[6px] h-[6px]" />
              <span className="font-['Montserrat'] font-medium text-[16px] sm:text-[20px]">
                UX Researcher, Designer &amp; Trust and Safety
              </span>
            </div>
            <img src={zigZag} alt="" className="w-full max-w-[610px] h-[11px] mb-8" />

            <h1 className="font-['Bruno_Ace'] text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.2] tracking-[-0.02em] mb-8 max-w-[600px]">
              I <HighlightWord>build</HighlightWord> the research practice,{' '}
              <HighlightWord>ship</HighlightWord> the interface, and{' '}
              <HighlightWord>interrogate</HighlightWord> the model behind it.
            </h1>

            <p className="font-['Montserrat'] font-medium text-[16px] sm:text-[20px] leading-[1.4] max-w-[610px]">
              I take a study from research strategy to stakeholder readout, and I treat the model behind the
              feature as fair game for the same rigor.
            </p>
          </div>

          {/* Right panel — illustration */}
          <div className="lg:w-[380px] shrink-0 bg-[var(--teal)] border-2 border-[var(--ink)] rounded-[5px] flex items-center justify-center p-10 sm:p-12">
            <img
              src={heroIllustration}
              alt="Illustrated portrait of Izzy Stephens"
              className="w-full max-w-[320px] -rotate-[8deg]"
            />
          </div>
        </div>

        {/* Short Version */}
        <div className="bg-[var(--ink)] text-[var(--bg)] rounded-[5px] mt-6 px-6 py-10 sm:px-12 sm:py-16">
          <div className="font-['Montserrat'] font-medium text-[16px] sm:text-[20px] mb-8">
            {'// The Short Version'}
          </div>
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
            {shortVersion.map((item) => (
              <div key={item.label}>
                <Link
                  to="/work"
                  className="block bg-[var(--teal)] text-[var(--ink)] border-2 border-[var(--ink)] rounded-[5px] px-4 py-3 text-center font-['Bruno_Ace_SC'] text-[14px] sm:text-[16px] tracking-[0.1em] underline mb-4 shadow-[4px_4px_0px_0px_var(--pink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--pink)] transition-all"
                >
                  {item.label}
                </Link>
                <p className="font-['Montserrat'] text-[14px] sm:text-[16px] leading-[1.6]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long Version */}
      <section className="max-w-[790px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <h2 className="font-['Bruno_Ace'] text-[28px] sm:text-[36px] tracking-[-0.02em] text-center mb-12">
          {'// The Long Version'}
        </h2>
        <div className="flex flex-col gap-10 sm:gap-16">
          {longVersion.map((block) => (
            <div
              key={block.title}
              className="bg-[var(--pink)] border-2 border-[var(--ink)] rounded-[5px] px-6 py-10 sm:px-16 sm:py-14 shadow-[10px_10px_0px_0px_var(--teal)] sm:shadow-[16px_16px_0px_0px_var(--teal)]"
            >
              <h3 className="font-['Montserrat'] font-semibold text-[24px] sm:text-[32px] tracking-[-0.01em] mb-6">
                {block.title}
              </h3>
              <div className="font-['Montserrat'] text-[15px] sm:text-[16px] leading-[1.6] space-y-4">
                {block.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </NeoLayout>
  );
}
