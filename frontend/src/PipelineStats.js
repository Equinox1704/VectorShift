import React from 'react';

export const PipelineStats = ({ stats, onClose }) => {
  if (!stats) return null;

  return (
    <>
      {/* Overlay backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1000,
        }}
      />
      
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#f0f4ff',
          padding: '24px',
          border: '1.5px solid #3b63f8',
          borderRadius: '14px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
          zIndex: 1001,
          maxWidth: '320px',
          width: '90%',
          textAlign: 'center',
        }}
      >
        <h3>Pipeline Stats</h3>
        <p>Nodes: <strong>{stats.num_nodes}</strong></p>
        <p>Edges: <strong>{stats.num_edges}</strong></p>
        <p>Is DAG: <strong>{stats.is_dag ? '✅ Yes' : '❌ No'}</strong></p>
        <button
          onClick={onClose}
          style={{
            marginTop: '16px',
            padding: '8px 16px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#3b63f8',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Close
        </button>
      </div>
    </>
  );
};
