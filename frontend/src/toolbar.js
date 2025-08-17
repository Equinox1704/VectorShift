// toolbar.js
import './index.css';
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div className='toolbar'>
                <DraggableNode type='input' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='output' label='Output' />
                <DraggableNode type='text' label='Text' />
            </div>
        </div>
    );
};
