import React, { useState } from 'react';
import { useStore } from './store';
import { PipelineStats } from './PipelineStats'; // Adjust path as needed

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const [stats, setStats] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });
      if (!response.ok) throw new Error(`Server error: ${response.statusText}`);

      const data = await response.json();
      setStats(data);  // Set the response stats to display below
    } catch (error) {
      alert('Error submitting pipeline: ' + error.message);
    }
  };

  const closeModal = () => setStats(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
      <button 
        onClick={handleSubmit} 
        type="button"
        style={{
          backgroundColor: '#3b63f8',
          color: 'white',
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          userSelect: 'none'
        }}
      >
        Submit Pipeline
      </button>
      <PipelineStats stats={stats} onClose={closeModal} />
    </div>
  );
};
