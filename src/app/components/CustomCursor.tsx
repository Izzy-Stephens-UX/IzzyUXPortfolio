import { useEffect, useRef } from 'react';

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, label, [role="button"], [data-cursor-hover]';

// A transparent circle that inverts whatever's beneath it (mix-blend-mode: difference
// against a white fill), so it reads correctly against every accent color on the site.
//
// Engagement is decided live via the Pointer Events API (pointerType === 'mouse')
// rather than a `(hover: hover)` media query — hybrid touchscreen laptops report the
// media query against their *primary* input and can say "no hover" even while a real
// mouse is plugged in and being used, which would silently disable this everywhere.
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dotRef.current;
    if (!el) return;

    let hovering = false;
    let active = false;

    function setTransform(x: number, y: number) {
      el!.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${hovering ? 1.6 : 1})`;
    }

    function activate() {
      if (active) return;
      active = true;
      document.documentElement.classList.add('custom-cursor-active');
      el!.style.opacity = '1';
    }

    function deactivate() {
      if (!active) return;
      active = false;
      document.documentElement.classList.remove('custom-cursor-active');
      el!.style.opacity = '0';
    }

    function handlePointerMove(e: PointerEvent) {
      if (e.pointerType !== 'mouse') return;
      activate();
      setTransform(e.clientX, e.clientY);
    }

    function handlePointerOver(e: PointerEvent) {
      if (e.pointerType !== 'mouse') return;
      const target = e.target as Element | null;
      const isInteractive = !!target?.closest?.(INTERACTIVE_SELECTOR);
      if (isInteractive !== hovering) {
        hovering = isInteractive;
        setTransform(e.clientX, e.clientY);
      }
    }

    function handlePointerDown(e: PointerEvent) {
      // A touch or pen tap fires its own pointerdown — treat that as "not a mouse"
      // and duck out until we see real mouse movement again.
      if (e.pointerType !== 'mouse') deactivate();
    }

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerover', handlePointerOver);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerleave', deactivate);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerover', handlePointerOver);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerleave', deactivate);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="fixed top-0 left-0 z-[9999] w-7 h-7 rounded-full pointer-events-none transition-[transform,opacity] duration-150 ease-out"
      style={{
        backgroundColor: '#fff',
        mixBlendMode: 'difference',
        boxShadow: '0 0 0 1.5px rgba(0,0,0,0.35), 0 0 10px 2px rgba(0,0,0,0.25)',
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%) scale(1)',
        opacity: 0,
        willChange: 'transform, opacity',
      }}
    />
  );
}
