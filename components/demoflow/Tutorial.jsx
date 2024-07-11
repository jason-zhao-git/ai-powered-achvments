"use client";
import React, { useState, useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import defaultNodes from "./nodes";
import defaultEdges from "./edges";

import TaskNode from "./nodes/TaskNode.jsx";
import CustomNode from './nodes/CardNote.jsx';
import AddNodeModal from './AddNodeModal';

const nodeTypes = {
  task: TaskNode,
  custom: CustomNode,
};

function FlowComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reactFlowInstance = useReactFlow();

  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection, type: "smoothstep" };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );

  const addNode = ({ name, type }) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      data: { label: name },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
      type,
    };
    reactFlowInstance.setNodes((nds) => nds.concat(newNode));
  };

  return (
    <div className="h-full">
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Node
      </button>
      <AddNodeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddNode={addNode}
      />
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap nodeStrokeWidth={3} zoomable pannable />
      </ReactFlow>
    </div>
  );
}

function DemoFlow() {
  return (
    <ReactFlowProvider>
      <FlowComponent />
    </ReactFlowProvider>
  );
}

export default DemoFlow;
