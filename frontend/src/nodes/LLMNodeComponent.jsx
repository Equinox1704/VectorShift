import React, { useState, useEffect } from 'react';

const LLMNodeComponent = ({ data, setData, id }) => {
  const [system, setSystem] = useState(data.system || '');
  const [prompt, setPrompt] = useState(data.prompt || '');

  useEffect(() => {
    if (typeof setData === 'function') {
      setData((d) => ({
        ...d,
        system,
        prompt,
      }));
    }
  }, [system, prompt, setData]);

  return (
    <div>
      <label>
        System:&nbsp;
        <input
          type="text"
          value={system}
          onChange={(e) => setSystem(e.target.value)}
        />
      </label>
      <br />
      <label>
        Prompt:&nbsp;
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </label>
    </div>
  );
};

export default LLMNodeComponent;
