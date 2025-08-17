import React from 'react';
import InputNodeComponent from './InputNodeComponent';
import OutputNodeComponent from './OutputNodeComponent';
import LLMNodeComponent from './LLMNodeComponent';
import TextNodeComponent from './TextNodeComponent';

export const nodeRegistry = {
  input: {
    title: "Input",
    icon: "🔗",
    outputs: [{ id: "output", position: "right" }],
    render: InputNodeComponent,
  },
  output: {
    title: "Output",
    icon: "📤",
    inputs: [{ id: "input", position: "left" }],
    render: OutputNodeComponent,
  },
  llm: {
    title: "LLM",
    icon: "🤖",
    inputs: [
      { id: "system", position: "left", top: 30 },
      { id: "prompt", position: "left", top: 60 }
    ],
    outputs: [{ id: "response", position: "right" }],
    render: LLMNodeComponent,
  },
  text: {
    title: "Text",
    icon: "📝",
    outputs: [{ id: "output", position: "right" }],
    render: TextNodeComponent,
  },
  // now for the demo nodes below
  concat: {
    title: "Concatenate",
    icon: "+",
    inputs: [
      { id: "left", position: "left" },
      { id: "right", position: "left", top: 40 }
    ],
    outputs: [{ id: "output", position: "right" }],
    render: ({ data }) => <div>Concatenate node</div>,
  },
  delay: {
    title: "Delay",
    icon: "⏳",
    inputs: [{ id: "input", position: "left" }],
    outputs: [{ id: "output", position: "right" }],
    render: ({ data, setData }) => (
      <input
        type="number"
        value={data.delay || ''}
        onChange={e => setData(d => ({ ...d, delay: e.target.value }))}
        placeholder="ms"
      />
    ),
  },
  switch: {
    title: "Switch",
    icon: "🎚️",
    inputs: [{ id: "input", position: "left" }],
    outputs: [
      { id: "true", position: "right" },
      { id: "false", position: "right", top: 40 },
    ],
    render: ({ data, setData }) => <div>Switch node</div>,
  },
  regex: {
    title: "Regex Extract",
    icon: "🔍",
    inputs: [{ id: "input", position: "left" }],
    outputs: [{ id: "matches", position: "right" }],
    render: ({ data, setData }) => (
      <input
        type="text"
        value={data.pattern || ''}
        onChange={e => setData(d => ({ ...d, pattern: e.target.value }))}
        placeholder="Regex pattern"
      />
    ),
  },
  markdown: {
    title: "Markdown",
    icon: "📄",
    inputs: [{ id: "input", position: "left" }],
    outputs: [{ id: "output", position: "right" }],
    render: ({ data, setData }) => (
      <textarea
        value={data.md || ''}
        onChange={e => setData(d => ({ ...d, md: e.target.value }))}
        placeholder="Write markdown"
        style={{ width: "100%" }}
      />
    ),
  },
};
