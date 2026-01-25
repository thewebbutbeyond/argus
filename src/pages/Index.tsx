import Header from "@/components/Header";
import SystemDiagram from "@/components/SystemDiagram";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="doc-container py-8">
        {/* Intro block */}
        <section className="pb-8">
          <h1 className="mb-4">argus: a real-time safety supervisor</h1>
          <p>
            ARGUS is a software-defined, independent safety supervision layer for robotic workspaces. 
            The robot executes pre-programmed motion; ARGUS monitors the workspace using vision and 
            intervenes on hazards.
          </p>
          <p>
            ARGUS is responsible only for safety enforcement, enabling deterministic analysis of 
            timing and failure modes.
          </p>
        </section>

        {/* Scope */}
        <section id="scope" className="doc-section">
          <h2>scope</h2>
          <ul>
            <li>monitors workspace via camera input</li>
            <li>evaluates hazard conditions (intrusion, collision risk, unexpected interference)</li>
            <li>outputs stop/inhibit signal to robot controller or actuation interface</li>
            <li>excludes task planning, trajectory optimisation, and performance control</li>
          </ul>
        </section>

        {/* System model */}
        <section id="system-model" className="doc-section">
          <h2>system model</h2>
          <SystemDiagram />
        </section>

        {/* Real-time constraints */}
        <section id="real-time-constraints" className="doc-section">
          <h2>real-time constraints</h2>
          <p>
            Correctness depends on both decision content and decision timing. The system measures 
            and bounds end-to-end latency from frame arrival to stop signal.
          </p>
          <ul>
            <li>event-driven processing (no polling loops for decision logic)</li>
            <li>bounded execution paths for hazard evaluation</li>
            <li>instrumentation for latency (timestamps at acquisition, evaluation, decision, output)</li>
            <li>measured performance reported in repository documentation</li>
          </ul>
        </section>

        {/* Failure behaviour */}
        <section id="failure-behaviour" className="doc-section">
          <h2>failure behaviour</h2>
          <p>
            ARGUS must fail safe under overload, dropped frames, or degraded sensing.
          </p>
          <ul>
            <li>if the pipeline cannot produce a decision within the deadline, default is stop/inhibit</li>
            <li>if frames are dropped or delayed beyond tolerance, default is stop/inhibit</li>
            <li>watchdogs and timeouts are treated as safety events, not ignored errors</li>
          </ul>
        </section>

        {/* Implementation notes */}
        <section id="implementation-notes" className="doc-section">
          <h2>implementation notes</h2>
          <p>
            Linux userspace, event-driven architecture using blocking I/O and callbacks. 
            Separation of modules using callbacks for incoming events and setters for outputs. 
            Empirical timing measurements, logged and reproducible.
          </p>
          <ul>
            <li>C++ (threads, timers where necessary)</li>
            <li>OpenCV/libcamera capture pathway</li>
            <li>GPIO/IPC for stop output</li>
          </ul>
        </section>

        {/* Repository */}
        <section id="repository" className="doc-section">
          <h2>repository</h2>
          <div className="doc-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              github repository
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              wiki and documentation
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              build and run instructions
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
