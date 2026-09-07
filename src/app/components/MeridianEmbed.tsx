import { useState, useRef } from 'react';

// BASE_URL is injected by Vite — '/' locally, '/repo-name/' on GitHub Pages
const GAME_SRC = `${import.meta.env.BASE_URL}projects/meridian/meridian_3.min.html`;

export default function MeridianEmbed() {
  const [active, setActive] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  function activate() {
    setActive(true);
    setTimeout(() => {
      try {
        const input = frameRef.current?.contentWindow?.document.getElementById('cmd');
        (input as HTMLElement | null)?.focus();
      } catch {
        // cross-origin guard — focus is best-effort
      }
    }, 200);
  }

  return (
    <div
      className="relative w-full overflow-hidden mb-8"
      style={{ boxShadow: '0 0 60px rgba(57,255,110,0.14), 0 0 180px rgba(57,255,110,0.06)' }}
    >
      {!active && (
        <button
          onClick={activate}
          className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer w-full border-0 p-0"
          style={{
            background: 'rgba(5, 11, 6, 0.72)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px',
            color: '#39ff6e',
            letterSpacing: '0.12em',
            textShadow: '0 0 12px rgba(57,255,110,0.6)',
          }}
          aria-label="Click to play Meridian"
        >
          [ CLICK TO PLAY ]
        </button>
      )}
      <iframe
        ref={frameRef}
        src={GAME_SRC}
        loading="lazy"
        title="MERIDIAN — A Text Adventure"
        allow="autoplay"
        className="block w-full border-none"
        style={{ height: '620px' }}
      />
    </div>
  );
}
