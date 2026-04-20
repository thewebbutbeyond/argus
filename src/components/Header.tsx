import argusLogo from "@/assets/argus-logo.png";

const Header = () => {
  const navLinks = [
    { href: "#platform", label: "Platform" },
    { href: "#workflow", label: "Workflow" },
    { href: "#validation", label: "Validation" },
    { href: "#integration", label: "Integration" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3 no-underline">
          <img 
            src={argusLogo} 
            alt="ARGUS Logo" 
            className="h-10 w-10"
          />
          <div>
            <p className="font-display text-lg font-semibold tracking-tight text-foreground">
              ARGUS
            </p>
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              real-time safety supervision
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground no-underline transition-colors hover:text-foreground"
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
