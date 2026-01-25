const SystemDiagram = () => {
  return (
    <div className="doc-diagram">
      <svg
        viewBox="0 0 620 90"
        className="w-full h-auto"
        aria-label="System model diagram showing data flow from camera input through hazard evaluation to stop output"
      >
        {/* Boxes - clean institutional style */}
        <rect x="0" y="30" width="120" height="35" fill="none" stroke="#282d33" strokeWidth="1.5" rx="2" />
        <rect x="160" y="30" width="140" height="35" fill="none" stroke="#282d33" strokeWidth="1.5" rx="2" />
        <rect x="340" y="30" width="140" height="35" fill="none" stroke="#282d33" strokeWidth="1.5" rx="2" />
        <rect x="520" y="30" width="100" height="35" fill="none" stroke="#282d33" strokeWidth="1.5" rx="2" />
        
        {/* Labels - clean sans-serif */}
        <text x="60" y="52" textAnchor="middle" fill="#282d33" fontSize="10" fontFamily="Inter, system-ui, sans-serif" fontWeight="500">
          camera input
        </text>
        <text x="230" y="52" textAnchor="middle" fill="#282d33" fontSize="10" fontFamily="Inter, system-ui, sans-serif" fontWeight="500">
          hazard evaluation
        </text>
        <text x="410" y="52" textAnchor="middle" fill="#282d33" fontSize="10" fontFamily="Inter, system-ui, sans-serif" fontWeight="500">
          guardian decision
        </text>
        <text x="570" y="52" textAnchor="middle" fill="#282d33" fontSize="10" fontFamily="Inter, system-ui, sans-serif" fontWeight="500">
          stop/inhibit
        </text>
        
        {/* Arrows - clinical teal accent */}
        <line x1="120" y1="47.5" x2="155" y2="47.5" stroke="#186b8c" strokeWidth="1.5" />
        <polygon points="155,44 160,47.5 155,51" fill="#186b8c" />
        
        <line x1="300" y1="47.5" x2="335" y2="47.5" stroke="#186b8c" strokeWidth="1.5" />
        <polygon points="335,44 340,47.5 335,51" fill="#186b8c" />
        
        <line x1="480" y1="47.5" x2="515" y2="47.5" stroke="#186b8c" strokeWidth="1.5" />
        <polygon points="515,44 520,47.5 515,51" fill="#186b8c" />
      </svg>
      <p className="doc-caption">
        Communication is event-driven; the input event triggers the processing chain.
      </p>
    </div>
  );
};

export default SystemDiagram;
