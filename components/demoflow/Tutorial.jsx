"use client";
import React, { useState, useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  Panel,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import defaultNodes from "./Nodes";
import defaultEdges from "./Edges";

import TaskNode from "./Nodes/TaskNode.jsx";
import CustomNode from "./Nodes/CardNote.jsx";
import AddNodeModal from "./AddNodeModal";
import CustomControls from "./CustomControls.jsx"

// the following is everything about the flow bg in the tutorial page

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

  const addNode = ({ name, nodeType, description, subtasks, connections }) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      data: {
        name: name,
        description: description,
        subtasks: subtasks,
        connections: {
          up: connections.up === 'none' ? null : connections.up,
          down: connections.down === 'none' ? null : connections.down,
          left: connections.left === 'none' ? null : connections.left,
          right: connections.right === 'none' ? null : connections.right,
        },
        isCompleted: false,
        createdAt: new Date().toISOString(),
        completedAt: null,
      },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
      type: nodeType,
    };
    reactFlowInstance.setNodes((nds) => nds.concat(newNode));
  };

  return (
    <div className="h-full">
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
        <CustomControls onAddNode={() => setIsModalOpen(true)} />
        <Background />
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
