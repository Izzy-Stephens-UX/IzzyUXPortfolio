import { Link } from 'react-router-dom';
import NeoLayout from '../components/neo/NeoLayout';

export default function BiasAuditPage() {
  return (
    <NeoLayout>
      <section className="max-w-[840px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--ink-muted)] mb-4">
          Research · Prompt Engineering
        </div>
        <h1 className="font-['Bruno_Ace'] text-[32px] sm:text-[48px] leading-[1.1] tracking-[-0.02em] mb-3">
          Bias Audit
        </h1>
        <p className="font-['Montserrat'] italic text-[16px] sm:text-[18px] text-[var(--ink-muted)] mb-10">
          The LLM prompt that needed a rewrite
        </p>

        <p className="font-['Montserrat'] text-[16px] sm:text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
          Caught a profile-scoring prompt rewarding communication style over substance before it launched,
          rebuilt it, then designed the 11-labeler taxonomy and human-in-the-loop pipeline behind it. Goblins
          uses an LLM-based system to review and score every user profile before it goes live — the idea is
          quality control, making sure profiles are genuine, safe, and give other users enough signal to decide
          if they want to connect.
        </p>

        <h3 className="font-['Montserrat'] font-semibold text-[20px] sm:text-[24px] mb-3 mt-10">The problem</h3>
        <p className="font-['Montserrat'] text-[16px] sm:text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
          Bias shows up as a pattern in the output before anyone can name who it's hurting. A profile-review
          prompt I audited was asking users to write descriptively and paint a picture with their words, which
          sounds harmless until you notice it's scoring a communication style rather than the substance of what
          someone actually said. It hadn't been tested, so I asked to take a swing at it, and I rebuilt it
          against mock and real profiles until the output held up.
        </p>

        <div className="bg-[var(--ink)] text-[var(--bg)] rounded-[5px] p-6 sm:p-8 mb-10">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <div className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-[var(--bg)]/60 mb-3">
                Before
              </div>
              <pre className="font-['JetBrains_Mono'] text-[11px] leading-[1.7] whitespace-pre-wrap">
                {'"Suggest a warrior (male)\nor healer (female) based\non user preference."'}
              </pre>
            </div>
            <div>
              <div className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-[var(--teal)] mb-3">
                After
              </div>
              <pre className="font-['JetBrains_Mono'] text-[11px] leading-[1.7] whitespace-pre-wrap">
                {'"Suggest archetypes without\ngender assumptions. Let the\nuser define their character."'}
              </pre>
            </div>
          </div>
        </div>

        <h3 className="font-['Montserrat'] font-semibold text-[20px] sm:text-[24px] mb-3">What I changed</h3>
        <p className="font-['Montserrat'] text-[16px] sm:text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-6">
          When we changed models months later I rebuilt it from secondary research instead of instinct, and the
          most useful thing I found was that there's no single style to design around, so any blanket allowance
          is incoherent. The strongest evidence in the literature is that bias against a communicator largely
          disappears once you judge content instead of delivery, and AI detectors are the cautionary version,
          having falsely flagged 61.3% of non-native-speaker essays because direct, low-variability prose reads
          as machine-generated. That's the default failure mode, not the edge case. I also stress-tested my own
          fix and found that scoring for specificity is safer than scoring for warmth but still not neutral,
          since it penalizes associative and big-picture styles, so it can't be a single gate.
        </p>
        <p className="font-['Montserrat'] text-[16px] sm:text-[17px] leading-[1.7] text-[var(--ink-soft)] mb-12">
          The revised prompt shipped within a week, expanding the definition of specificity to include values,
          communication style, emotional boundaries, and interaction preferences — and adding explicit
          protections for neurodivergent communication styles.
        </p>

        <Link
          to="/contact"
          className="font-['Bruno_Ace_SC'] text-[13px] tracking-[0.1em] underline inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          Not posted publicly — ask me <span>→</span>
        </Link>
      </section>
    </NeoLayout>
  );
}
