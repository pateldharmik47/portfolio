import { useEffect, useState } from "react";
import { navLinks } from "../constants/data";

export default function Header() {
  const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [dark, setDark] = useState(prefersDark);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
      <nav className="container max-w-6xl flex items-center justify-between py-3">
        <a href="#hero" className="text-lg font-bold tracking-tight">DP</a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.url ? (
                <a href={link.url} target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                  {link.title}
                </a>
              ) : (
                <a href={`#${link.id}`} className="hover:opacity-80 transition-opacity">
                  {link.title}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((d) => !d)}
            className="rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="Toggle theme"
          >
            {dark ? "🌙" : "☀️"}
          </button>
          <button
            className="md:hidden rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
          <ul className="container max-w-6xl py-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                {link.url ? (
                  <a href={link.url} target="_blank" rel="noreferrer" className="block py-2">
                    {link.title}
                  </a>
                ) : (
                  <a href={`#${link.id}`} className="block py-2" onClick={() => setOpen(false)}>
                    {link.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
