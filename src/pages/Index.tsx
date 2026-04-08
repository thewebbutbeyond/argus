import { ArrowRight, Camera, Cpu, Hand, Shield, TimerReset, Zap } from "lucide-react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SystemDiagram from "@/components/SystemDiagram";

const proofCards = [
  {
    title: "Validated on hardware",
    body: "Raspberry Pi 5, camera, PCA9685, MeArm, and physical operator button exercised end-to-end.",
  },
  {
    title: "Operator-visible safety",
    body: "Unsafe scene freezes motion immediately. Recovery stays paused until an explicit continue action.",
  },
  {
    title: "Clear embedded control path",
    body: "Camera capture, vision, guardian, interlock, and motion remain separate and testable.",
  },
];

const featureCards = [
  {
    icon: Shield,
    title: "Independent supervision",
    body: "ARGUS watches the workspace and makes a separate safety decision about whether motion is allowed.",
  },
  {
    icon: Zap,
    title: "Fast, explicit intervention",
    body: "When the scene goes unsafe, motion is frozen through the interlock rather than left to application guesswork.",
  },
  {
    icon: Hand,
    title: "Operator-controlled recovery",
    body: "Safe-again does not mean auto-resume. Recovery still requires a deliberate continue action from the operator.",
  },
];

const validationItems = [
  "Per-joint motion smoke tests for base, lower, upper, and grip",
  "All-joint hardware smoke test over the PCA9685 path",
  "Physical GPIO button diagnostics with debounce and state reporting",
  "Live marker supervision with GUI status and controlled arming",
  "Full pipeline demo: freeze, safe-again, acknowledge, and resume",
];

const integrationItems = [
  "C++ runtime with clear control modules",
  "Raspberry Pi camera path tuned for real hardware",
  "PCA9685-backed motion control behind a robot interlock",
  "GPIO-based operator input using the Linux character-device ABI",
  "Run scripts for smoke tests, button tests, live tests, and demos",
];

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(196,83,42,0.18),transparent_36%),radial-gradient(circle_at_top_right,rgba(39,104,130,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,242,236,0.88))]" />
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.9fr] lg:px-10 lg:py-24">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
                  Embedded safety platform
                </p>
                <h1 className="max-w-4xl font-display text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                  A vision safety layer built to stop the robot when the scene stops making sense.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                  ARGUS monitors the workspace, evaluates live visual safety conditions,
                  freezes motion when needed, and only restores motion through a visible,
                  deliberate recovery path. It is designed to feel like a real industrial
                  control product, not a black-box demo.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#workflow"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground no-underline transition-transform hover:-translate-y-0.5"
                >
                  See the control flow
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#validation"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground no-underline transition-colors hover:bg-card"
                >
                  Review validated hardware tests
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-border/70 bg-card/75 p-5">
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Detection
                  </p>
                  <p className="font-display text-2xl font-semibold">Live camera</p>
                </div>
                <div className="rounded-[1.5rem] border border-border/70 bg-card/75 p-5">
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Action
                  </p>
                  <p className="font-display text-2xl font-semibold">Immediate freeze</p>
                </div>
                <div className="rounded-[1.5rem] border border-border/70 bg-card/75 p-5">
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Recovery
                  </p>
                  <p className="font-display text-2xl font-semibold">Operator continue</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 self-end">
              {proofCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[1.75rem] border border-border/70 bg-card/80 p-6 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.3)]"
                >
                  <p className="mb-3 font-display text-2xl font-semibold text-foreground">
                    {card.title}
                  </p>
                  <p className="text-sm leading-7 text-muted-foreground">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10 max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              Platform
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground">
              A product-style control stack, grounded in the system you actually built.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              The Attys material gets one thing right: the site should explain what the
              system is for, what it can do, how it integrates, and why anyone should
              trust it. ARGUS should do the same, while staying honest about its current
              maturity and validation scope.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-[1.75rem] border border-border/70 bg-card p-6"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 font-display text-2xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground">{feature.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="workflow" className="border-y border-border/60 bg-card/40">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                Workflow
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground">
                Five steps from scene observation to motion permission.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                The control path is deliberately readable. Each stage has one job, which
                makes the behavior easier to test on hardware and easier to explain to an
                engineering team.
              </p>

              <div className="grid gap-3">
                <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/80 p-4">
                  <Camera className="mt-0.5 h-5 w-5 text-primary" />
                  <p className="text-sm leading-7 text-muted-foreground">
                    Camera frames drive the supervision path continuously while the operator
                    sees the same state in the GUI.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/80 p-4">
                  <Cpu className="mt-0.5 h-5 w-5 text-primary" />
                  <p className="text-sm leading-7 text-muted-foreground">
                    Vision and guardian logic decide whether motion stays allowed, freezes,
                    or is waiting on controlled recovery.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/80 p-4">
                  <TimerReset className="mt-0.5 h-5 w-5 text-primary" />
                  <p className="text-sm leading-7 text-muted-foreground">
                    Resume is not automatic. Safe-again still needs a continue action from
                    the operator before the system reopens the motion gate.
                  </p>
                </div>
              </div>
            </div>

            <SystemDiagram />
          </div>
        </section>

        <section id="validation" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10 max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              Validation
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground">
              Real tests, not just architecture diagrams.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              The current base already covers the kind of evidence a technical reviewer
              wants to see: isolated hardware checks, operator input checks, live vision
              behavior, and full-loop demos on the Pi.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[1.75rem] border border-border/70 bg-card p-6">
              <ul className="space-y-4">
                {validationItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-7 text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-primary/25 bg-primary/8 p-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Current demonstrator
              </p>
              <p className="mb-4 font-display text-3xl font-semibold text-foreground">
                Hardware-validated, product-positioned, still engineering-first.
              </p>
              <p className="text-sm leading-7 text-muted-foreground">
                This is the right tone for the site: speak like a serious control product,
                but do not pretend the project is already a certified industrial safety
                controller. The credibility comes from showing the real control path and
                the real demo behavior.
              </p>
            </div>
          </div>
        </section>

        <section id="integration" className="border-y border-border/60 bg-foreground text-background">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground/70">
                Integration
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-background">
                Built like something a robotics team could reason about.
              </h2>
              <p className="text-lg leading-8 text-background/72">
                The value is not only in the demo. It is also in the way the system is
                partitioned: capture, vision, guardian, interlock, motion, and operator
                controls are separated cleanly enough to test, explain, and evolve.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-background/12 bg-background/6 p-6">
              <ul className="space-y-4">
                {integrationItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-7 text-background/76">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,rgba(196,83,42,0.08),rgba(39,104,130,0.08))] p-8 lg:p-10">
            <div className="max-w-4xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                Positioning
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground">
                The next iteration should sell confidence, control, and integration readiness.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                That means less “student project” language and more emphasis on what an
                engineering buyer or technical reviewer cares about: what the system
                supervises, how it intervenes, how it recovers, what it runs on, and what
                has already been demonstrated on hardware.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
