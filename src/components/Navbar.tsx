import { useState } from "react";
import logo from "../assets/logo-text.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#footer" },
  { label: "About", href: "#footer" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleClick = (label: string) => {
    setActive(label);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: hamburger (mobile) / logo (desktop) */}
        <div className="flex flex-1 items-center justify-start lg:flex-none">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 hover:bg-gray-100 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <a href="#home" className="hidden lg:block">
            <img src={logo} alt="Dev Stack" className="h-10 w-auto" />
          </a>
        </div>

        {/* Center: logo on mobile */}
        <a href="#home" className="flex flex-1 justify-center lg:hidden">
          <img src={logo} alt="Dev Stack" className="h-9 w-auto" />
        </a>

        {/* Center: desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => handleClick(l.label)}
                className={`text-[15px] font-medium transition-colors ${
                  active === l.label
                    ? "text-pink-600"
                    : "text-slate-700 hover:text-pink-600"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons */}
        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4 lg:flex-none">
          <button className="text-sm font-medium text-slate-700 hover:text-pink-600 sm:text-[15px]">
            Sign In
          </button>
          <button className="rounded-full bg-pink-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-pink-700 sm:px-5 sm:text-[15px]">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="border-t border-gray-100 bg-white px-6 py-3 lg:hidden">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => handleClick(l.label)}
                className={`block py-3 text-base font-medium ${
                  active === l.label ? "text-pink-600" : "text-slate-700"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}