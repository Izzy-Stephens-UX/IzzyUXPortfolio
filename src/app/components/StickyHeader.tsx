export default function StickyHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-[var(--line)] bg-[var(--bg)]/80">
      <div className="max-w-[1280px] mx-auto px-10 py-6 flex items-center justify-between">
        <div className="font-['Fraunces'] text-xl" style={{ fontWeight: 400 }}>
          Izzy Stephens<span className="text-[var(--red)]">.</span>
        </div>
        <nav className="flex gap-8">
          {['Goblins', 'Bias Audit', 'Meridian', 'Tools', 'Experience', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--ink-soft)] hover:text-[var(--red)] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
