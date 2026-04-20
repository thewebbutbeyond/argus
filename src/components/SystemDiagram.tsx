const stages = [
  {
    title: "Camera capture",
    detail: "Live frame acquisition on Raspberry Pi with a stable V4L2-first path.",
  },
  {
    title: "Vision processing",
    detail: "Forbidden-layer colour detection in the monitored cut area generates safe/unsafe state.",
  },
  {
    title: "Guardian state machine",
    detail: "Unsafe evidence drives freeze; stable good frames drive controlled recovery.",
  },
  {
    title: "Robot interlock",
    detail: "Motion is gated here, so unsafe state blocks actuation at the hardware boundary.",
  },
  {
    title: "Motion controller",
    detail: "PCA9685-backed commands reach the arm only when the interlock allows motion.",
  },
];

const SystemDiagram = () => {
  return (
    <div className="rounded-[2rem] border border-border/70 bg-card/75 p-6 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] lg:p-8">
      <div className="grid gap-4 lg:grid-cols-5">
        {stages.map((stage, index) => (
          <div key={stage.title} className="relative rounded-[1.5rem] border border-border/70 bg-background/75 p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-mono text-xs font-semibold text-primary">
                0{index + 1}
              </span>
              {index < stages.length - 1 ? (
                <span className="hidden text-xs uppercase tracking-[0.24em] text-muted-foreground lg:inline">
                  next
                </span>
              ) : null}
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
              {stage.title}
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">{stage.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-[1.25rem] border border-primary/25 bg-primary/8 px-5 py-4 text-sm text-foreground">
        Freeze, acknowledge, and resume remain part of the same control chain. ARGUS
        is not a motion shortcut layered on top of the robot. It is the gate.
      </div>
    </div>
  );
};

export default SystemDiagram;
