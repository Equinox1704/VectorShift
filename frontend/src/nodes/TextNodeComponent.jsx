import React, { useState, useEffect } from 'react';

const TextNodeComponent = ({ data, setData, id }) => {
  const [localText, setLocalText] = useState(data.text || "");

  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...localText.matchAll(regex)].map((m) => m[1]);
    const uniqueVars = Array.from(new Set(matches));
    const lineCount = localText.split('\n').length;
    const width = Math.min(Math.max(180, localText.length * 8), 480);
    const height = Math.min(Math.max(80, lineCount * 22), 300);

    // Call setData from registry, safe with injected updater
    if (typeof setData === 'function') {
      setData((d) => ({
        ...d,
        text: localText,
        variables: uniqueVars,
        style: { width, height },
      }));
    }
  }, [localText, setData]);

  return (
    <textarea
      className="nodrag"
      value={localText}
      onChange={(e) => setLocalText(e.target.value)}
      style={{
        width: "100%",
        height: "100%",
        resize: "none",
        fontSize: 14,
        padding: 8,
        boxSizing: "border-box",
        borderRadius: 4,
        border: "1px solid #ccc",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    />
  );
};

export default TextNodeComponent;
