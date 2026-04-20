import { ArrowRight, Camera, Cpu, Hand, Shield, TimerReset, Zap } from "lucide-react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SystemDiagram from "@/components/SystemDiagram";

const proofCards = [
  {
    title: "Real hardware, real tests",
    body: "Raspberry Pi, camera, servo controller, robotic arm, physical buttons. Each module runs its test; the full pipeline runs end-to-end.",
  },
  {
    title: "Safety you can see",
    body: "Unsafe scene triggers immediate freeze. Recovery is paused. Operator must acknowledge the event and explicitly continue.",
  },
  {
    title: "Modular and verifiable",
    body: "Capture, vision, guardian logic, interlock, and motion stay separate. Each can be tested and reasoned about independently.",
  },
];

const featureCards = [
  {
    icon: Shield,
    title: "Deterministic safety",
    body: "Each stage of the control path is isolated and testable. No black box, no hidden state.",
  },
  {
    icon: Zap,
    title: "Hardware interlock",
    body: "When unsafe, motion freezes through verified GPIO interlock. Not a software-only brake.",
  },
  {
    icon: Hand,
    title: "Explicit recovery",
    body: "Safe again does not mean moving again. Operator must acknowledge and command resume.",
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
          <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(255,138,76,0.08),transparent_36%),radial-gradient(circle_at_top_right,rgba(255,138,76,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,1),rgba(255,255,255,1))]" />
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.9fr] lg:px-10 lg:py-24">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
                  Real-time safety supervision
                </p>
                <h1 className="max-w-4xl font-display text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                  Stop the robot when the workspace becomes unsafe.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                  ARGUS is a vision-based safety layer that watches the scene, makes independent
                  safety decisions, and freezes motion through hardware interlock. Recovery is
                  explicit—no auto-resume, no guesswork. Built on Raspberry Pi. Tested. Real.
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
              Independent, deterministic, testable.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              The control stack is intentionally simple: capture, vision, guardian logic, hardware interlock,
              and operator controls stay separate. This means each stage is testable, the behavior is predictable,
              and a robotics team can actually reason about what's happening.
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
              Tested on hardware, not in simulations.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              ARGUS runs on real Raspberry Pi hardware with actual camera feed, physical operator buttons,
              and a real robotic arm. Each module is isolated and tested. The full pipeline—detection, freeze,
              safe-again, acknowledgment, resume—works on silicon.
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
          <div className="rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,rgba(255,138,76,0.05),rgba(255,138,76,0.05))] p-8 lg:p-10">
            <div className="max-w-4xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                Ready to integrate
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground">
                Safety that a robotics team can build with.
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                ARGUS is not a black-box AI system. It is a structured, testable control layer. The code is modular,
                the behavior is deterministic, and the hardware demo is real. Start from the control pipeline, understand
                what you are integrating, and trust that it will work the same way on your hardware.
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
