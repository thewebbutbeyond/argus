import { ArrowRight, Hand, Shield, Zap } from "lucide-react";

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
    body: "Unsafe evidence stops routine progress, retracts to a safe pose, then holds frozen. Recovery needs explicit operator acknowledge.",
  },
  {
    title: "Measured and justified",
    body: "Latency metrics are measured at runtime and compared against targets derived from surgical robotics and teleoperation literature.",
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
    body: "Motion commands pass through an interlock gate. Unsafe state blocks output at the actuator boundary.",
  },
  {
    icon: Hand,
    title: "Explicit recovery",
    body: "Safe again does not auto-resume. The same control path (space/button) is required to continue.",
  },
];

const validationItems = [
  "Per-joint motion smoke tests for base, lower, upper, and grip",
  "All-joint hardware smoke test over the PCA9685 path",
  "Physical GPIO button diagnostics with debounce and state reporting",
  "Camera backend check for libcamera2opencv and OpenCV fallback",
  "Live colour supervision with retract-safe, freeze hold, and acknowledged resume",
];

const integrationItems = [
  "C++ runtime with clear control modules",
  "Compliance-first Raspberry Pi camera backend with practical fallback",
  "PCA9685-backed motion control behind a robot interlock",
  "GPIO-based operator input using the Linux character-device ABI",
  "Run scripts for smoke tests, button tests, live tests, and demos",
];

const latencyCards = [
  {
    metric: "Detect unsafe",
    measured: "4 ms",
    target: "<= 30 ms",
    note: "Capture of first unsafe frame to unsafe decision.",
  },
  {
    metric: "Issue freeze",
    measured: "458 ms",
    target: "<= 900 ms",
    note: "Unsafe decision to freeze callback in the control path.",
  },
  {
    metric: "Stop motion",
    measured: "7206 ms",
    target: "<= 8000 ms",
    note: "First unsafe frame to issued stop command.",
  },
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
                  Adaptive real-time guardian for unsafe situations
                </p>
                <h1 className="max-w-4xl font-display text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                  Stop the robot when the workspace becomes unsafe
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                  ARGUS is a vision-based safety layer that watches the scene, makes independent
                  safety decisions, and gates motion through guardian + interlock logic. In the
                  surgery demonstrator, forbidden-layer colour in the cut zone triggers retract,
                  freeze, and explicit operator-controlled resume.
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
                  <p className="font-display text-2xl font-semibold">Forbidden-layer colour</p>
                </div>
                <div className="rounded-[1.5rem] border border-border/70 bg-card/75 p-5">
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Action
                  </p>
                  <p className="font-display text-2xl font-semibold">Retract then freeze</p>
                </div>
                <div className="rounded-[1.5rem] border border-border/70 bg-card/75 p-5">
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Recovery
                  </p>
                  <p className="font-display text-2xl font-semibold">Space/button continue</p>
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
              Independent, deterministic, testable
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
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
            {/* Left: Description */}
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                Workflow
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground">
                Five steps from scene observation to motion permission
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                The control path is deliberately readable. Each stage has one job, which
                makes the behavior easier to test on hardware and easier to explain to an
                engineering team.
              </p>
            </div>

            {/* Right: Timeline */}
            <div className="space-y-0">
              {/* Step 01 */}
              <div className="border-l-2 border-border/70 pl-8 py-8">
                <div className="relative">
                  <div className="absolute -left-12 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-mono text-sm font-semibold">
                    01
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Camera capture</h3>
                  <p className="text-sm leading-7 text-muted-foreground max-w-2xl">
                    Live frame acquisition on Raspberry Pi with a stable V4L2-first path.
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="border-l-2 border-border/70 pl-8 py-8">
                <div className="relative">
                  <div className="absolute -left-12 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-mono text-sm font-semibold">
                    02
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Vision processing</h3>
                  <p className="text-sm leading-7 text-muted-foreground max-w-2xl">
                    Forbidden-layer colour detection in the monitored cut area generates safe/unsafe state.
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="border-l-2 border-border/70 pl-8 py-8">
                <div className="relative">
                  <div className="absolute -left-12 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-mono text-sm font-semibold">
                    03
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Guardian state machine</h3>
                  <p className="text-sm leading-7 text-muted-foreground max-w-2xl">
                    Unsafe evidence drives freeze; stable good frames drive controlled recovery.
                  </p>
                </div>
              </div>

              {/* Step 04 */}
              <div className="border-l-2 border-border/70 pl-8 py-8">
                <div className="relative">
                  <div className="absolute -left-12 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-mono text-sm font-semibold">
                    04
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Robot interlock</h3>
                  <p className="text-sm leading-7 text-muted-foreground max-w-2xl">
                    Motion is gated here, so unsafe state blocks actuation at the hardware boundary.
                  </p>
                </div>
              </div>

              {/* Step 05 */}
              <div className="pl-8 py-8">
                <div className="relative">
                  <div className="absolute -left-12 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-mono text-sm font-semibold">
                    05
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Motion controller</h3>
                  <p className="text-sm leading-7 text-muted-foreground max-w-2xl">
                    PCA9685-backed commands reach the arm only when the interlock allows motion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <SystemDiagram />
        </section>

        <section id="validation" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10 max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              Validation
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground">
              Hardware-tested and measured in runtime logs
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              ARGUS runs on real Raspberry Pi hardware with actual camera feed, physical operator buttons,
              and a real robotic arm. Each module is isolated and tested. The full pipeline (detection, freeze,
              safe-again, acknowledgment, resume) is validated on-device.
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
                Current live baseline
              </p>
              <p className="mb-4 font-display text-3xl font-semibold text-foreground">
                Surgery flow with measurable safety response.
              </p>
              <p className="text-sm leading-7 text-muted-foreground">
                The current demonstrator runs manual mode and predefined routines under the
                same guardian/interlock safety contract: unsafe -&gt; retract-safe -&gt; freeze hold
                -&gt; explicit operator continue.
              </p>
            </div>
          </div>
        </section>

        <section id="latency" className="border-y border-border/60 bg-card/40">
          <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
            <div className="mb-10 max-w-4xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                Latency evidence
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground">
                Runtime metrics aligned with published safety context
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                ARGUS measures latency in the live pipeline and compares it with engineering
                targets used in the project baseline. The targets are justified in the README
                and wiki using surgical robotics and teleoperation literature.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {latencyCards.map((item) => (
                <article
                  key={item.metric}
                  className="rounded-[1.75rem] border border-border/70 bg-card p-6"
                >
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                    {item.metric}
                  </p>
                  <p className="font-display text-3xl font-semibold text-foreground">{item.measured}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Target: {item.target}</p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.note}</p>
                </article>
              ))}
            </div>

            <p className="mt-8 text-sm leading-7 text-muted-foreground">
              See detailed metrics and references in the{" "}
              <a
                href="https://github.com/ENG5220-RTEP-Team-ARGUS/ARGUS/blob/develop/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                README
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/ENG5220-RTEP-Team-ARGUS/ARGUS/wiki/Latency-and-Validation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                wiki latency page
              </a>
              .
            </p>
          </div>
        </section>

        <section id="integration" className="border-y border-border/60 bg-foreground text-background">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-foreground/70">
                Integration
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-background">
                Built like something a robotics team could reason about
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
                Safety that a robotics team can build with
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
