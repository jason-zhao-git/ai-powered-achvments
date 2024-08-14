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
  applyEdgeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import defaultNodes from "./Nodes/index.jsx";
import defaultEdges from "./Edges/index.jsx";

import TaskNode from "./Nodes/TaskNode.jsx";
import AnnotationNode from "./Nodes/AnnotationNode.jsx";
import NarratorNode from "./Nodes/NarratorNode.jsx";

import TaskEdge from "./Edges/TaskEdge.tsx";

import AddNodeModal from "./AddNodes/AddNodeModal.tsx";
import CustomControls from "./CustomControls.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  mainNodes,
  tutorialNodes,
  codeNodes,
  vocalNodes,
  fitnessNodes,
} from "./Nodes/index.jsx";
import {
  mainEdges,
  tutorialEdges,
  codeEdges,
  vocalEdges,
  fitnessEdges,
} from "./Edges/index.jsx";

const nodeTypes = {
  task: TaskNode,
  annotation: AnnotationNode,
  narrator: NarratorNode,
};

const edgeTypes = {
  task: TaskEdge,
  default: "smoothstep",
};

function FlowComponent({ flowKey }) {
  let defaultNodes = [];
  let defaultEdges = [];

  switch (flowKey) {
    case "main":
      defaultNodes = mainNodes;
      defaultEdges = mainEdges;
      break;
    case "tutorial":
      defaultNodes = tutorialNodes;
      defaultEdges = tutorialEdges;
      break;
    case "code":
      defaultNodes = codeNodes;
      defaultEdges = codeEdges;
      break;
    case "vocal":
      defaultNodes = vocalNodes;
      defaultEdges = vocalEdges;
      break;
    case "fitness":
      defaultNodes = fitnessNodes;
      defaultEdges = fitnessEdges;
      break;

    default:
      defaultNodes = defaultNodes;
      defaultEdges = defaultEdges;
      break;
  }
  const initializeNodes = () => {
    if (typeof window !== "undefined") {
      const flow = JSON.parse(window.localStorage.getItem(flowKey));
      return flow ? flow.nodes : defaultNodes;
    }
    return defaultNodes;
  };

  // Function to initialize edges from local storage or default
  const initializeEdges = () => {
    if (typeof window !== "undefined") {
      const flow = JSON.parse(window.localStorage.getItem(flowKey));
      return flow ? flow.edges : defaultEdges;
    }
    return defaultEdges;
  };
  const [nodes, setNodes, onNodesChange] = useNodesState(initializeNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initializeEdges);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rfInstance, setRfInstance] = useState(null);
  const [cycleDetected, setCycleDetected] = useState(false);

  const { setViewport, getNodes, getEdges, getViewport,setCenter, fitView } =
    useReactFlow();

  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection, type: "task" };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );

  const onSave = useCallback(() => {
    if (typeof window !== "undefined" && rfInstance) {
      const flow = rfInstance.toObject();
      window.localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      if (typeof window !== "undefined") {
        const flow = JSON.parse(window.localStorage.getItem(flowKey));

        if (flow) {
          const { x = 0, y = 0, zoom = 1 } = flow.viewport;
          setNodes(flow.nodes || []);
          setEdges(flow.edges || []);
          setViewport({ x, y, zoom });
        } else {
          console.error("No flow data found in local storage");
        }
      }
    };

    restoreFlow();
  }, [setNodes, setEdges, setViewport]);

  useEffect(() => {
    onRestore();
  }, [onRestore]);

  useEffect(() => {
    onSave();
  }, [nodes, edges, onSave]);

  const addNode = (data) => {
    let newNode;
    let newPosition = { x: Math.random() * 100, y: Math.random() * 100 };
    if (data.nodeType === "task") {
      const { name, nodeType, description, connections } = data;
      newNode = {
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
        position: newPosition,
        type: nodeType,
      };
    } else if (data.nodeType === "annotation") {
      const { name, nodeType, description, arrowStyle } = data;
      newNode = {
        id: `${nodes.length + 1}`,
        data: {
          name: name,
          description: description,
          arrowStyle: arrowStyle,
        },
        position: newPosition,
        type: nodeType,
      };
    }

    const nodeChange = {
      type: "add",
      item: newNode,
    };

    setNodes((nds) => applyNodeChanges([nodeChange], nds));

    setCenter(newPosition.x, newPosition.y, {
      duration: 1000, // Adjust duration as needed
      zoom: 2.0, 
    });

    toast.success(<div>Node &quot;{newNode.data.name}&quot; created!</div>, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      className: "toast-success",
    });
  };

  const nodeColor = (node) => {
    if (node.type === "task") {
      return node.data.isCompleted ? "#FFD700" : "#1C1C1C";
    } else if (node.type === "annotation") {
      return "#D3D3D3";
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
      const iscycleDetected = hasCycle(target);
      setCycleDetected(iscycleDetected);
      if (cycleDetected) {
        toast.warn(
          <div>
            <span className="font-semibold">Warning:</span> Your edge will
            create a cycle deadlock!
          </div>,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            className: "toast-warning",
          }
        );
      }

      if (iscycleDetected) {
        setTimeout(() => {
          setCycleDetected(false);
        }, 3000);
      }

      return !iscycleDetected;
    },
    [getNodes, getEdges]
  );

  const onSearch = useCallback(
    (searchTerm) => {
      const nodes = getNodes();
      const node = nodes.find((node) =>
        node.data.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (node) {
        fitView({
          nodes: [{ id: node.id }],
          padding: 0.1, // Adjust padding as needed
          duration: 1000, // Adjust duration as needed
          minZoom: 0.5,
          maxZoom: 2,
        });
        toast.success(<div>Node &quot;{node.data.name}&quot; found!</div>, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          className: "toast-success",
        });
      } else {
        toast.error(<div>Node &quot;{searchTerm}&quot; not found!</div>, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          className: "toast-error",
        });
      }
    },
    [getNodes, fitView]
  );

  useEffect(() => {
    if (cycleDetected) {
      toast.warn(
        <div>
          <span className="font-semibold">Warning:</span> Your edge will create
          a cycle deadlock!
        </div>,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          className: "toast-warning",
        }
      );
    }
  }, [cycleDetected]);

  return (
    <div className="h-full">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
        <CustomControls
          onAddNode={() => setIsModalOpen(true)}
          onSearch={onSearch}
        />
        <Background />
        <MiniMap nodeStrokeWidth={3} zoomable pannable nodeColor={nodeColor} />
      </ReactFlow>
    </div>
  );
}

function DemoFlow({ flowKey }) {
  return (
    <ReactFlowProvider>
      <FlowComponent flowKey={flowKey} />
    </ReactFlowProvider>
  );
}

export default DemoFlow;
