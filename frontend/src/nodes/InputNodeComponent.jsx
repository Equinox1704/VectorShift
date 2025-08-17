import React, { useState, useEffect } from 'react';

const InputNodeComponent = ({ data, setData, id }) => {
  const [inputName, setInputName] = useState(data.inputName || '');
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  useEffect(() => {
    // Update node data
    if (typeof setData === 'function') {
      setData((d) => ({
        ...d,
        inputName,
        inputType,
      }));
    }
  }, [inputName, inputType, setData]);

  return (
    <div>
      <label>
        Name:&nbsp;
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Type:&nbsp;
        <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </div>
  );
};

export default InputNodeComponent;
