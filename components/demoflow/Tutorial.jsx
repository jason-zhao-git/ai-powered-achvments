"use client";
import React, { useState, useCallback, useEffect } from "react";
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
import CustomControls from "./CustomControls.jsx";

// the following is everything about the flow bg in the tutorial page

const nodeTypes = {
  task: TaskNode,
  custom: CustomNode,
};

function FlowComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rfInstance, setRfInstance] = useState(null);


  const reactFlowInstance = useReactFlow();
  const { setViewport } = useReactFlow();

  const flowKey = "tutorial";

  const onConnect = useCallback(
    (connection) => {
      console.log("Connection:", connection);
      const edge = { ...connection, type: "smoothstep" };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );

  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setViewport]);

  const addNode = ({ name, nodeType, description, subtasks, connections }) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      data: {
        name: name,
        description: description,
        subtasks: subtasks,
        connections: {
          up: connections.up === "none" ? null : connections.up,
          down: connections.down === "none" ? null : connections.down,
          left: connections.left === "none" ? null : connections.left,
          right: connections.right === "none" ? null : connections.right,
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
        onInit={setRfInstance}
        fitView
      >
        <CustomControls onAddNode={() => setIsModalOpen(true)} />
        <Background />
        <MiniMap nodeStrokeWidth={3} zoomable pannable />
        <Panel position="top-right">
        <button onClick={onSave}>save</button>
        <button onClick={onRestore}>restore</button>
        </Panel>
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
