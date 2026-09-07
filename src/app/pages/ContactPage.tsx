import { useState, type FormEvent } from 'react';
import NeoLayout from '../components/neo/NeoLayout';

// Placeholder address — replace with your real contact email.
const EMAIL = 'izzy@example.com';

const manifesto = [
  {
    title: 'Looking for',
    items: [
      'Mid-level Product Designer',
      'UX Researcher with design exposure',
      'UX Designer-Researcher hybrid',
      'Roles where research has a seat at the table',
    ],
    strike: false,
  },
  {
    title: 'Industries that fit',
    items: [
      'AI-native product companies',
      'Design tooling, dev tools',
      'Community platforms',
      'Healthtech, edtech with consumer surface',
    ],
    strike: false,
  },
  {
    title: 'Not for me',
    items: [
      'Defense, weapons, surveillance',
      'Predatory finance, MLM',
      '"Rockstar," "ninja," work-hard-play-hard',
      'Pure-execution UI titles',
    ],
    strike: true,
  },
];

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'a visitor'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ''}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <NeoLayout>
      <section className="max-w-[900px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="font-['Montserrat'] font-medium text-[16px] sm:text-[20px] mb-4">{'// Contact'}</div>
        <h1 className="font-['Bruno_Ace'] text-[30px] sm:text-[46px] leading-[1.15] tracking-[-0.02em] mb-12">
          Let's talk.
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[var(--pink)] border-2 border-[var(--ink)] rounded-[5px] p-6 sm:p-10 shadow-[10px_10px_0px_0px_var(--teal)] flex flex-col gap-5 mb-20"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em]">Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[var(--bg-card)] border-2 border-[var(--ink)] rounded-[5px] px-4 py-3 font-['Montserrat'] text-[14px] outline-none focus:border-[var(--teal)]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em]">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[var(--bg-card)] border-2 border-[var(--ink)] rounded-[5px] px-4 py-3 font-['Montserrat'] text-[14px] outline-none focus:border-[var(--teal)]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em]">Message</label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[var(--bg-card)] border-2 border-[var(--ink)] rounded-[5px] px-4 py-3 font-['Montserrat'] text-[14px] outline-none focus:border-[var(--teal)] resize-none"
            />
          </div>
          <button
            type="submit"
            className="self-start bg-[var(--teal)] text-[var(--ink)] border-2 border-[var(--ink)] rounded-[5px] px-8 py-3 font-['Bruno_Ace_SC'] text-[13px] tracking-[0.1em] shadow-[4px_4px_0px_0px_var(--yellow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--yellow)] transition-all"
          >
            Send message
          </button>
        </form>

        <div className="grid sm:grid-cols-3 gap-10 pt-10 border-t-2 border-[var(--ink)]">
          {manifesto.map((col) => (
            <div key={col.title}>
              <h4 className="font-['JetBrains_Mono'] uppercase text-[10px] tracking-[0.14em] text-[var(--ink-soft)] mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2 font-['Montserrat'] text-[14px] leading-[1.7]">
                {col.items.map((item) => (
                  <li key={item} className={col.strike ? 'line-through text-[var(--ink-muted)]' : ''}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </NeoLayout>
  );
}
