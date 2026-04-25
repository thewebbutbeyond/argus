import { Github, Instagram, Youtube, Linkedin, Music } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/argus102026/",
      label: "Instagram",
      icon: Instagram,
    },
    {
      href: "https://www.youtube.com/@argus-w3g",
      label: "YouTube",
      icon: Youtube,
    },
    {
      href: "https://www.linkedin.com/company/a-r-g-u-s",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "https://www.tiktok.com/@argusxisx61?_r=1&_t=ZN-95E4anYeInm",
      label: "TikTok",
      icon: Music,
    },
    {
      href: "https://github.com/ENG5220-RTEP-Team-ARGUS/ARGUS",
      label: "GitHub",
      icon: Github,
    },
  ];

  return (
    <footer className="border-t border-border/70 bg-card/60">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_auto] lg:px-10">
        <div className="space-y-3">
          <p className="font-display text-lg font-semibold text-foreground">ARGUS</p>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Vision-based safety supervision for robotic workcells. Designed to
            monitor the scene, freeze unsafe motion, and resume only through an
            explicit recovery path.
          </p>
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

      <div className="border-t border-border/70">
        <div className="mx-auto w-full max-w-7xl px-6 py-6 lg:px-10">
          <p className="text-xs text-muted-foreground">
            © 2026 ARGUS.{" "}
            <a
              href="https://www.thewebbutbeyond.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              Powered by WEB+
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
