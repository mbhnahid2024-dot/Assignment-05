import logo from "../assets/logo-text.png";

const groups = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "#home" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#footer" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#footer" },
      { label: "Contact", href: "#footer" },
      { label: "Careers", href: "#footer" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#footer" },
      { label: "Terms of Service", href: "#footer" },
    ],
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/mbhnahid2024-dot/Assignment-05" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer id="footer" className="w-full border-t border-gray-100 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand block */}
          <div>
            <img src={logo} alt="Dev Stack" className="h-9 w-auto" />
            <p className="mt-4 max-w-sm text-sm text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-6 flex gap-5 text-sm font-medium">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-600"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-xs font-bold uppercase tracking-wider">
                {g.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-slate-500 hover:text-pink-600"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-gray-100 py-8 text-sm text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#footer" className="hover:text-pink-600">Privacy</a>
            <a href="#footer" className="hover:text-pink-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}