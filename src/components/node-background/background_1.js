import React from 'react';

const Background = () => {
  // Generate static node positions in a grid-like pattern
  const nodes = [];
  const spacing = 150;

  for (let x = spacing; x < window.innerWidth; x += spacing) {
    for (let y = spacing; y < window.innerHeight; y += spacing) {
      const randX = x + (Math.random() - 0.5) * spacing * 0.5;
      const randY = y + (Math.random() - 0.5) * spacing * 0.5;
      nodes.push({ x: randX, y: randY });
    }
  }

  const connections = [];
  nodes.forEach((node1, i) => {
    nodes.forEach((node2, j) => {
      if (i < j) {
        const distance = Math.sqrt(
          Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)
        );
        if (distance < spacing * 1.5) {
          connections.push({ start: node1, end: node2 });
        }
      }
    });
  });

  return (
    <div style={{
      position: 'fixed', // Changed from absolute to fixed
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#f5f5f5',
      overflow: 'hidden',
      zIndex: -999, // Much lower z-index to ensure it stays behind everything
      pointerEvents: 'none' // Ensures clicks pass through to elements below
    }}>
      <svg width="100%" height="100%">
        {connections.map((conn, i) => (
          <line
            key={`line-${i}`}
            x1={conn.start.x}
            y1={conn.start.y}
            x2={conn.end.x}
            y2={conn.end.y}
            stroke="#393e41"
            strokeWidth="1"
            opacity="0.3"
          />
        ))}

        {nodes.map((node, i) => (
          <circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r="4"
            fill="#393e41"
            opacity="0.5"
          />
        ))}
      </svg>
    </div>
  );
};

export default Background;