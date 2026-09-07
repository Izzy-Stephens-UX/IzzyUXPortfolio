import type { ReactNode } from 'react';
import NeoHeader from './NeoHeader';
import NeoFooter from './NeoFooter';

export default function NeoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] flex flex-col">
      <NeoHeader />
      <main className="flex-1">{children}</main>
      <NeoFooter />
    </div>
  );
}
