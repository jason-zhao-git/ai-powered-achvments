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
  getOutgoers,
  applyNodeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import defaultNodes from "./Nodes";
import defaultEdges from "./Edges";

import TaskNode from "./Nodes/TaskNode.jsx";
import CustomNode from "./Nodes/CardNote.jsx";

import TaskEdge from "./Edges/TaskEdge";

import AddNodeModal from "./AddNode/AddNodeModal";
import CustomControls from "./CustomControls.jsx";

import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// the following is everything about the flow bg in the tutorial page

const nodeTypes = {
  task: TaskNode,
  custom: CustomNode,
};
const edgeTypes = {
  task: TaskEdge,
};

function FlowComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rfInstance, setRfInstance] = useState(null);
  const [cycleDetected, setCycleDetected] = useState(false);

  const reactFlowInstance = useReactFlow();
  const { setViewport, getNodes, getEdges, getNode } = useReactFlow();

  const flowKey = "tutorial";

  const onConnect = useCallback(
    (connection) => {
      console.log("Connection:", connection);
      const edge = { ...connection, type: "task" };
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
        setNodes(flow.nodes || defaultNodes);
        setEdges(flow.edges || defaultEdges);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes,setEdges, setViewport]);

  useEffect(() => {
    onRestore();
  }, [onRestore]);

  useEffect(() => {
    onSave();
  }, [nodes, edges, onSave]);

  const addNode = ({ name, nodeType, description, connections }) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      data: {
        name: name,
        description: description,
        subtasks: [],
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

    const nodeChange = {
      type: "add",
      item: newNode,
    };

    setNodes((nds) => applyNodeChanges([nodeChange], nds));
  };

  const nodeColor = (node) => {
    if (node.type === "task") {
      return node.data.isCompleted ? "#FFD700" : "#1C1C1C";
    }
    return "#2E2E2E";
  };

  const isValidConnection = useCallback(
    (connection) => {
      const nodes = getNodes();
      const edges = getEdges();
      const target = nodes.find((node) => node.id === connection.target);
      const hasCycle = (node, visited = new Set()) => {
        if (visited.has(node.id)) return false;

        visited.add(node.id);

        for (const outgoer of getOutgoers(node, nodes, edges)) {
          if (outgoer.id === connection.source) return true;
          if (hasCycle(outgoer, visited)) return true;
        }
      };

      if (target.id === connection.source) return false;
      const cycleDetected = hasCycle(target);
      setCycleDetected(cycleDetected);

      if (cycleDetected) {
        setTimeout(() => {
          setCycleDetected(false);
        }, 3000);
      }

      return !cycleDetected;
    },
    [getNodes, getEdges]
  );

  useEffect(() => {
    // Reapply edge styles on node changes
    const updatedEdges = edges.map((edge) => {
      const sourceNode = getNode(edge.source);
      const targetNode = getNode(edge.target);
      return {
        ...edge,
        type: !sourceNode.data.isCompleted && !targetNode.data.isCompleted? "smoothstep" : "task",
        animated: sourceNode.data.isCompleted && !targetNode.data.isCompleted,
        style: {
          stroke: "lightgrey",
          strokeWidth: sourceNode.data.isCompleted && targetNode.data.isCompleted ? 3 : 1,
        }
      };
    });
    setEdges(updatedEdges);
  }, [nodes]);


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
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setRfInstance}
        isValidConnection={isValidConnection}
        fitView
      >
        {cycleDetected && (
            <Alert className="bg-transparent !border-0 text-red-600 text-lg !flex !justify-center">
              <div className="mt-16 p-4 -mr-3 font-semibold font-pixel">
              <Terminal className="h-4 w-4 mb-2" />
              <AlertDescription>
                Your edge will create a cycle deadlock.
              </AlertDescription>
              </div>
            </Alert>
        )}
        <CustomControls onAddNode={() => setIsModalOpen(true)} />
        <Background />
        <MiniMap nodeStrokeWidth={3} zoomable pannable nodeColor={nodeColor} />
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
