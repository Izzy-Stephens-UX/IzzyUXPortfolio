import { useState, type FormEvent } from 'react';

// Placeholder address — replace with your real contact email.
const EMAIL = 'izzy@example.com';

export default function NeoFooter() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact${name ? ` from ${name}` : ''}`);
    const body = encodeURIComponent(message || ' ');
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <footer className="bg-[var(--ink)] text-[var(--bg)] border-t-2 border-[var(--ink)]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <div className="font-['Montserrat'] font-medium text-[16px] sm:text-[20px] mb-8">
          {'// Get in touch'}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-16 max-w-[720px]">
          <input
            type="text"
            required
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 bg-[var(--bg)] text-[var(--ink)] border-2 border-[var(--bg)] rounded-[5px] px-4 py-3 font-['Montserrat'] text-[14px] placeholder:text-[var(--ink-muted)] outline-none focus:border-[var(--teal)]"
          />
          <input
            type="text"
            required
            placeholder="Say hello..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-[2] bg-[var(--bg)] text-[var(--ink)] border-2 border-[var(--bg)] rounded-[5px] px-4 py-3 font-['Montserrat'] text-[14px] placeholder:text-[var(--ink-muted)] outline-none focus:border-[var(--teal)]"
          />
          <button
            type="submit"
            className="bg-[var(--teal)] text-[var(--ink)] border-2 border-[var(--bg)] rounded-[5px] px-6 py-3 font-['Bruno_Ace_SC'] text-[12px] tracking-[0.1em] shadow-[4px_4px_0px_0px_var(--pink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--pink)] transition-all whitespace-nowrap"
          >
            Send
          </button>
        </form>

        <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t-2 border-[var(--bg)]/20">
          <div className="flex gap-8">
            {[
              { label: 'Email', href: `mailto:${EMAIL}` },
              { label: 'LinkedIn', href: '#' },
              { label: 'GitHub', href: '#' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-['Montserrat'] text-[12px] uppercase tracking-[0.1em] border-b-2 border-transparent hover:border-[var(--teal)] transition-colors pb-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="font-['Montserrat'] text-[12px] text-[var(--bg)]/60">
            © {new Date().getFullYear()} Izzy Stephens
          </div>
        </div>
      </div>
    </footer>
  );
}
