import { useEffect, useRef } from 'react';

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, label, [role="button"], [data-cursor-hover]';

// A transparent circle that inverts whatever's beneath it (mix-blend-mode: difference
// against a white fill), so it reads correctly against every accent color on the site.
// Only engages on devices with a real mouse — touch devices render nothing.
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    const el = dotRef.current;
    if (!el) return;

    document.documentElement.classList.add('custom-cursor-active');
    let hovering = false;

    function setTransform(x: number, y: number) {
      el!.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${hovering ? 1.6 : 1})`;
    }

    function handleMove(e: MouseEvent) {
      setTransform(e.clientX, e.clientY);
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as Element | null;
      const isInteractive = !!target?.closest?.(INTERACTIVE_SELECTOR);
      if (isInteractive !== hovering) {
        hovering = isInteractive;
        setTransform(e.clientX, e.clientY);
      }
    }

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="fixed top-0 left-0 z-[9999] w-7 h-7 rounded-full pointer-events-none transition-transform duration-150 ease-out"
      style={{
        backgroundColor: '#fff',
        mixBlendMode: 'difference',
        boxShadow: '0 0 0 1.5px rgba(0,0,0,0.35), 0 0 10px 2px rgba(0,0,0,0.25)',
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%) scale(1)',
        willChange: 'transform',
      }}
    />
  );
}
