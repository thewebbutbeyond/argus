const SystemDiagram = () => {
  return (
    <div className="doc-diagram">
      <svg
        viewBox="0 0 600 80"
        className="w-full h-auto"
        aria-label="System model diagram showing data flow from camera input through hazard evaluation to stop output"
      >
        {/* Boxes */}
        <rect x="0" y="25" width="110" height="30" fill="none" stroke="hsl(0, 0%, 60%)" strokeWidth="1" />
        <rect x="150" y="25" width="130" height="30" fill="none" stroke="hsl(0, 0%, 60%)" strokeWidth="1" />
        <rect x="320" y="25" width="130" height="30" fill="none" stroke="hsl(0, 0%, 60%)" strokeWidth="1" />
        <rect x="490" y="25" width="110" height="30" fill="none" stroke="hsl(0, 0%, 60%)" strokeWidth="1" />
        
        {/* Labels */}
        <text x="55" y="45" textAnchor="middle" fill="hsl(0, 0%, 92%)" fontSize="12" fontFamily="Inter, sans-serif">
          camera input
        </text>
        <text x="215" y="45" textAnchor="middle" fill="hsl(0, 0%, 92%)" fontSize="12" fontFamily="Inter, sans-serif">
          hazard evaluation
        </text>
        <text x="385" y="45" textAnchor="middle" fill="hsl(0, 0%, 92%)" fontSize="12" fontFamily="Inter, sans-serif">
          guardian decision
        </text>
        <text x="545" y="45" textAnchor="middle" fill="hsl(0, 0%, 92%)" fontSize="12" fontFamily="Inter, sans-serif">
          stop/inhibit
        </text>
        
        {/* Arrows */}
        <line x1="110" y1="40" x2="145" y2="40" stroke="hsl(0, 0%, 60%)" strokeWidth="1" />
        <polygon points="145,37 150,40 145,43" fill="hsl(0, 0%, 60%)" />
        
        <line x1="280" y1="40" x2="315" y2="40" stroke="hsl(0, 0%, 60%)" strokeWidth="1" />
        <polygon points="315,37 320,40 315,43" fill="hsl(0, 0%, 60%)" />
        
        <line x1="450" y1="40" x2="485" y2="40" stroke="hsl(0, 0%, 60%)" strokeWidth="1" />
        <polygon points="485,37 490,40 485,43" fill="hsl(0, 0%, 60%)" />
      </svg>
      <p className="doc-caption">
        Communication is event-driven; the input event triggers the processing chain.
      </p>
    </div>
  );
};

export default SystemDiagram;
