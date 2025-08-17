import React from 'react';
import BaseNode from './BaseNode';
import { nodeRegistry } from './nodeRegistry';

const GenericNode = ({ data, id, type }) => {
  const config = nodeRegistry[data.nodeType || type];
  if (!config) return <div>Unknown node</div>;

  const dynamicInputs =
    data.nodeType === 'text' && Array.isArray(data.variables)
      ? data.variables.map((variable, index) => ({
          id: `var-${variable}`,
          position: 'left',
          top: 20 + index * 20,
        }))
      : config.inputs || [];

  const setData = (updater) => {
    if (typeof data.updateData === 'function') {
      data.updateData(updater);
    } else {
      console.error('data.updateData is not a function');
    }
  };

  const RenderComponent = config.render;

  return (
    <BaseNode
      title={config.title}
      icon={config.icon}
      inputs={dynamicInputs}
      outputs={config.outputs || []}
      style={data.style}
    >
      <RenderComponent data={data} setData={setData} id={id} />
    </BaseNode>
  );
};
export default GenericNode;
