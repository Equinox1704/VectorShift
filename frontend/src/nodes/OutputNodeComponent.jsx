import React, { useState, useEffect } from 'react';

const OutputNodeComponent = ({ data, setData, id }) => {
  const [outputName, setOutputName] = useState(data.outputName || '');
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  useEffect(() => {
    if (typeof setData === 'function') {
      setData((d) => ({
        ...d,
        outputName,
        outputType,
      }));
    }
  }, [outputName, outputType, setData]);

  return (
    <div>
      <label>
        Name:&nbsp;
        <input
          type="text"
          value={outputName}
          onChange={(e) => setOutputName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Type:&nbsp;
        <select value={outputType} onChange={(e) => setOutputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </div>
  );
};

export default OutputNodeComponent;
