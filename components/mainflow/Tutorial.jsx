"use client";
import {
  ReactFlow,
  MiniMap,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState, useCallback, useMemo } from "react";

import defaultNodes from "./nodes";
import defaultEdges from "./edges";

import TaskNode from "./nodes/TaskNode.jsx";

import CustomNode from './nodes/CardNote.jsx';

const nodeTypes = { task: TaskNode,
   custom: CustomNode,
 };

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(defaultNodes);

  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection, type: "smoothstep" };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );
  
  
  return (
    <div style={{ height: "100%" }}>
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

export default Flow;


{/*const onNodeMouseEnter = useCallback(
    (event, node) => {
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === node.id) {
            return {
              ...n,
              style: {
                maxWidth: 200,
                maxHeight: 100,
                transition: "width 1s, height 1s",
              },
            };
          }
          return n;
        })
      );
    },
    [setNodes]
  );

  const onNodeMouseLeave = useCallback(
    (event, node) => {
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === node.id) {
            return {
              ...n,
              style: {
                width: 24,
                height: 24,
                transition: "width 0.5s, height 0.5s",
              },
            };
          }
          return n;
        })
      );
    },
    [setNodes]
  );*/}