import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MarqueeText } from '../../Home/MarqueeComponents';

const navItems = [
  { to: '/about', label: 'About LetsUpgrade' },
  { to: '/explore-programs', label: 'Explore Programs' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/refer', label: 'Refer & Earn' },
  { to: '/rewards', label: 'Rewards' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = true;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/85 shadow-sm backdrop-blur-md">
        <div className="flex w-full items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-10 xl:px-16">
          <div className="hidden flex-1 items-center gap-2 lg:flex xl:gap-3">
            {navItems.slice(0, 2).map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} />
            ))}
          </div>

          <div className="flex flex-1 items-center justify-between gap-3 lg:flex-none">
            <Link to="/" className="flex items-center">
              <img src="/main_logo.png" alt="Lets Upgrade Logo" className="h-8 object-contain sm:h-10" />
            </Link>

            <button
              type="button"
              className="rounded-xl p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <div className="hidden flex-1 items-center justify-end gap-2 lg:flex xl:gap-3">
            {navItems.slice(2).map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} />
            ))}
            <Link
              to={isLoggedIn ? '/dashboard' : '/login'}
              className="rounded-full bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-800"
            >
              {isLoggedIn ? 'Dashboard' : 'Login'}
            </Link>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t border-gray-100 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
            isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <MobileNavItem key={item.to} to={item.to} label={item.label} onClick={() => setIsOpen(false)} />
            ))}
            <MobileNavItem
              to={isLoggedIn ? '/dashboard' : '/login'}
              label={isLoggedIn ? 'Dashboard' : 'Login'}
              onClick={() => setIsOpen(false)}
              emphasized
            />
          </div>
        </div>
      </header>

      <MarqueeText
        text="✨ USER ENROLLED IN C++ BOOTCAMP ✨ USER ENROLLED IN SQL BOOTCAMP ✨ USER JOINED PYTHON PROGRAM"
        repeat={5}
        speed={40}
        className="bg-black py-2 text-white"
        itemClassName="text-xs font-bold tracking-wide sm:text-sm"
      />
    </>
  );
};

export default Header;

const NavItem = ({ to, label }: { to: string; label: string }) => (
  <Link to={to} className="rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100">
    {label}
  </Link>
);

const MobileNavItem = ({
  to,
  label,
  onClick,
  emphasized = false,
}: {
  to: string;
  label: string;
  onClick?: () => void;
  emphasized?: boolean;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block rounded-xl px-4 py-3 text-sm transition ${
      emphasized ? 'bg-black text-white hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    {label}
  </Link>
);
