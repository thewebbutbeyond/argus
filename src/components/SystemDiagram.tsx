const SystemDiagram = () => {
  return (
    <div className="doc-diagram">
      <svg
        viewBox="0 0 620 90"
        className="w-full h-auto"
        aria-label="System model diagram showing data flow from camera input through hazard evaluation to stop output"
      >
        {/* Boxes - brutalist style with thick borders */}
        <rect x="0" y="30" width="120" height="35" fill="none" stroke="#f2f2f2" strokeWidth="2" />
        <rect x="160" y="30" width="140" height="35" fill="none" stroke="#f2f2f2" strokeWidth="2" />
        <rect x="340" y="30" width="140" height="35" fill="none" stroke="#f2f2f2" strokeWidth="2" />
        <rect x="520" y="30" width="100" height="35" fill="none" stroke="#f2f2f2" strokeWidth="2" />
        
        {/* Labels - uppercase brutalist */}
        <text x="60" y="53" textAnchor="middle" fill="#f2f2f2" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700" letterSpacing="0.05em">
          CAMERA INPUT
        </text>
        <text x="230" y="53" textAnchor="middle" fill="#f2f2f2" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700" letterSpacing="0.05em">
          HAZARD EVAL
        </text>
        <text x="410" y="53" textAnchor="middle" fill="#f2f2f2" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700" letterSpacing="0.05em">
          GUARDIAN DEC
        </text>
        <text x="570" y="53" textAnchor="middle" fill="#f2f2f2" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700" letterSpacing="0.05em">
          STOP/INHIBIT
        </text>
        
        {/* Arrows - thick brutalist style */}
        <line x1="120" y1="47.5" x2="155" y2="47.5" stroke="#7d9bb5" strokeWidth="2" />
        <polygon points="155,43 160,47.5 155,52" fill="#7d9bb5" />
        
        <line x1="300" y1="47.5" x2="335" y2="47.5" stroke="#7d9bb5" strokeWidth="2" />
        <polygon points="335,43 340,47.5 335,52" fill="#7d9bb5" />
        
        <line x1="480" y1="47.5" x2="515" y2="47.5" stroke="#7d9bb5" strokeWidth="2" />
        <polygon points="515,43 520,47.5 515,52" fill="#7d9bb5" />
      </svg>
      <p className="doc-caption">
        communication is event-driven; the input event triggers the processing chain.
      </p>
    </div>
  );
};

export default SystemDiagram;
