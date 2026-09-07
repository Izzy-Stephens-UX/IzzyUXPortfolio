import { useEffect, useRef, useState } from 'react';

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
  'Reflections',
];

export default function NeoCaseStudyNav() {
  const [activeSection, setActiveSection] = useState('');
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    elementsRef.current = sections.map((s) => document.getElementById(s.toLowerCase().replace(/\s+/g, '-')));

    const handleScroll = () => {
      if (rafRef.current !== null) return;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;

        const current = elementsRef.current.find((el) => {
          if (!el) return false;
          const { top } = el.getBoundingClientRect();
          return top >= 0 && top <= window.innerHeight / 2;
        });

        if (current) {
          const name = sections.find((s) => s.toLowerCase().replace(/\s+/g, '-') === current.id);
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

  return (
    <nav className="sticky top-28 self-start w-56 hidden lg:block shrink-0">
      <div className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--ink-muted)] mb-4">
        In this case study
      </div>
      <ul className="space-y-0">
        {sections.map((section) => {
          const isActive = activeSection === section;
          return (
            <li key={section}>
              <a
                href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                className={`block font-['Montserrat'] text-[13px] py-1.5 pl-3 border-l-2 -ml-3 pr-3 transition-all ${
                  isActive
                    ? 'border-[var(--ink)] text-[var(--ink)] bg-[var(--bg-tinted)]'
                    : 'border-transparent text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-[var(--ink)]/30'
                }`}
              >
                {section}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
