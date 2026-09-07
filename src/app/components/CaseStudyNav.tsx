import { useState, useEffect, useRef } from 'react';

const sections = [
  'The Setup',
  'The Problem',
  'The Constraints',
  'Study Design',
  'The AI Behind the Profiles',
  'Running the Study',
  'Synthesis',
  'Findings',
  'Delivering the Research',
  'Reflections'
];

export default function CaseStudyNav() {
  const [activeSection, setActiveSection] = useState('Overview');
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    elementsRef.current = sections.map(s =>
      document.getElementById(s.toLowerCase().replace(/\s+/g, '-'))
    );

    const handleScroll = () => {
      if (rafRef.current !== null) return;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;

        const current = elementsRef.current.find(el => {
          if (!el) return false;
          const { top } = el.getBoundingClientRect();
          return top >= 0 && top <= window.innerHeight / 2;
        });

        if (current) {
          const name = sections.find(s =>
            s.toLowerCase().replace(/\s+/g, '-') === current.id
          );
          if (name) setActiveSection(name);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const activeIndex = sections.indexOf(activeSection);

  return (
    <nav className="sticky top-32 w-60">
      {/* Header row with position counter */}
      <div className="flex items-center justify-between mb-6">
        <div className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--red)]">
          In this case study
        </div>
        {activeIndex >= 0 && (
          <div className="font-['JetBrains_Mono'] text-[10px] text-[var(--ink-muted)] tabular-nums">
            {activeIndex + 1}&thinsp;/&thinsp;{sections.length}
          </div>
        )}
      </div>

      <ul className="space-y-0">
        {sections.map((section, index) => {
          const isActive = activeSection === section;
          return (
            <li key={section}>
              <a
                href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                className={`
                  flex items-baseline gap-2 font-['Source_Serif_4'] text-[13px] py-1.5 pl-3
                  border-l-2 transition-all -ml-3 pr-3
                  ${isActive
                    ? 'border-[var(--red)] text-[var(--ink)] bg-[var(--bg-card)]'
                    : 'border-transparent text-[var(--ink-soft)] hover:text-[var(--ink)] hover:border-[var(--line)] hover:bg-[var(--bg-elevated)]'
                  }
                `}
              >
                {/* Step number — always rendered, visible only when active */}
                <span
                  className={`
                    font-['JetBrains_Mono'] text-[9px] tabular-nums shrink-0 transition-all
                    ${isActive ? 'text-[var(--red)]/70 opacity-100 w-4' : 'opacity-0 w-0 overflow-hidden'}
                  `}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                {section}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="font-['JetBrains_Mono'] text-[10px] text-[var(--red)] mt-12">
        ↓ Embedded slides
      </div>
    </nav>
  );
}
