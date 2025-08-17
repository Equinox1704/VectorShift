import React from 'react';
import { Handle } from 'reactflow';
import './BaseNode.css'; // We'll define simple styles for now

const BaseNode = ({
  title,
  icon,
  inputs = [],
  outputs = [],
  children,
  style = {},
}) => (
  <div className="base-node" style={style}>
    <div className="base-node-header">{icon && <span>{icon}</span>} <b>{title}</b></div>
    <div className="base-node-body">{children}</div>
    {inputs.map((h) => (
      <Handle
        key={h.id}
        type="target"
        position={h.position || "left"}
        id={h.id}
        style={{ top: h.top || undefined }}
      />
    ))}
    {outputs.map((h) => (
      <Handle
        key={h.id}
        type="source"
        position={h.position || "right"}
        id={h.id}
        style={{ top: h.top || undefined }}
      />
    ))}
  </div>
);

export default BaseNode;
