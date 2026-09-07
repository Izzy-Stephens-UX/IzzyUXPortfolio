import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function NeoHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)] border-b-2 border-[var(--ink)]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-between gap-6 flex-wrap">
        <Link
          to="/"
          className="font-['Bruno_Ace_SC'] text-[18px] sm:text-[22px] tracking-[0.09em] text-[var(--ink)]"
        >
          Izzy Stephens
        </Link>
        <nav className="flex items-center gap-6 sm:gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `inline-block font-['Bruno_Ace_SC'] text-[13px] sm:text-[16px] tracking-[0.12em] underline decoration-2 underline-offset-4 text-[var(--ink)] transition-all duration-200 ease-out hover:scale-[1.15] hover:-rotate-2 hover:text-[var(--teal)] hover:underline-offset-[6px] ${
                  isActive ? 'opacity-100' : 'opacity-75'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
