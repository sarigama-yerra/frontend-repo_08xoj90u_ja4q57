import { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About the Heart', href: '#about' },
    { label: 'Diseases & Prevention', href: '#diseases' },
    { label: 'Exercise', href: '#exercise' },
    { label: 'Tips', href: '#tips' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-blue-100">
      <nav aria-label="Primary" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2" aria-label="Heart Health Home">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-red-500 text-white">
              <Heart className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-semibold tracking-tight text-slate-800">HeartWell</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded px-1 py-2 transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-blue-100 py-2">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-3 text-slate-700 hover:bg-blue-50 rounded"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
