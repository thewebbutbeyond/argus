import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/ENG5220-RTEP-ARGUS/ARGUS",
      label: "GitHub",
      icon: Github,
    },
    {
      href: "https://www.linkedin.com/search/results/all/?keywords=ARGUS%20robotics",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "mailto:argus@example.com",
      label: "Email",
      icon: Mail,
    },
  ];

  return (
    <footer className="border-t border-border/70 bg-card/60">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.3fr_1fr_auto] lg:px-10">
        <div className="space-y-3">
          <p className="font-display text-lg font-semibold text-foreground">ARGUS</p>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Vision-based safety supervision for robotic workcells. Designed to
            monitor the scene, freeze unsafe motion, and resume only through an
            explicit recovery path.
          </p>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Validated hardware demo on Raspberry Pi.</p>
          <p>C++ control core, camera supervision, interlock-gated motion.</p>
          <p>ENG5220 real-time embedded programming · 2025–26</p>
        </div>

        <div className="flex items-start gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-primary hover:text-primary hover:bg-primary/10"
                aria-label={link.label}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
