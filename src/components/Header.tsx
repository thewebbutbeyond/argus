const Header = () => {
  const navLinks = [
    { href: "#scope", label: "scope" },
    { href: "#system-model", label: "system model" },
    { href: "#real-time-constraints", label: "real-time constraints" },
    { href: "#failure-behaviour", label: "failure behaviour" },
    { href: "#implementation-notes", label: "implementation notes" },
    { href: "#repository", label: "repository" },
  ];

  return (
    <header className="py-6 border-b border-border">
      <div className="doc-container flex justify-between items-baseline flex-wrap gap-4">
        <span className="text-foreground font-medium">argus</span>
        <nav className="flex gap-6 flex-wrap">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="doc-nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
