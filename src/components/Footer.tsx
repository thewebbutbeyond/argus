const Footer = () => {
  return (
    <footer className="border-t border-border/70 bg-card/60">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.3fr_1fr] lg:px-10">
        <div className="space-y-3">
          <p className="font-display text-lg font-semibold text-foreground">ARGUS</p>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Vision-based safety supervision for robotic workcells. Designed to
            monitor the scene, freeze unsafe motion, and resume only through an
            explicit recovery path.
          </p>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground lg:text-right">
          <p>Validated hardware demo on Raspberry Pi.</p>
          <p>C++ control core, camera supervision, interlock-gated motion.</p>
          <p>ENG5220 real-time embedded programming · 2025–26</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
