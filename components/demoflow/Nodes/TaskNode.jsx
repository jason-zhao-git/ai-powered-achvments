"use client";
import React, { memo, useState, useEffect } from "react";
import { Handle, Position } from "@xyflow/react";
import Image from "next/image";
import "../../css/nodes.css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TriangleUpIcon from "/public/icons/Nodes/triangle-up.svg";
import TriangleDownIcon from "/public/icons/Nodes/triangle-down.svg";
import TriangleLeftIcon from "/public/icons/Nodes/triangle-left.svg";
import TriangleRightIcon from "/public/icons/Nodes/triangle-right.svg";
import TaskDialog from "../AddNodes/TaskDialog.jsx"; // Import the dialog component
import { useReactFlow, NodeResizeControl } from "@xyflow/react";
import ResizeIcon from "./ResizeIcon"

function TaskNode ({ id, data, isConnectable, dragging }) {
  const [isHovered, setIsHovered] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [nodeData, setNodeData] = useState(data);
  const { getNode, updateNodeData } = useReactFlow();
  const [size, setSize] = useState(30); // Set the initial size to 30

  useEffect(() => {
    const node = getNode(id);
    if (node) {
      const width = node.width || 40;
      setSize(width);
    }
  }, [getNode, id]);

  

  const handleSave = (updatedData) => {
    const existingNode = getNode(id);
    if (!existingNode) return;

    const updatedNodeData = {
      name: updatedData.name,
      description: updatedData.description,
      isCompleted: updatedData.isCompleted,
      subtasks: updatedData.subtasks,
      imageSrc: updatedData.imageSrc,
    };

    if (updatedData.isCompleted && !existingNode.data.isCompleted) {
      
      updatedNodeData.completedAt = new Date().toISOString();
    }
    if (!updatedData.isCompleted && existingNode.data.isCompleted) {
      updatedNodeData.completedAt = null;
    }

    updateNodeData(id, updatedNodeData, { replace: false });

    setNodeData((prevData) => ({ ...prevData, ...updatedNodeData }));
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setDialogOpen(!dialogOpen);
  };

  const borderWidth = Math.max(3, size / 20);
  const fontSize = Math.max(12, size / 5);

  return (
    <div className="relative w-full h-full">
      {dialogOpen && (
        <NodeResizeControl
          className="z-50 bg-transparent border-0 absolute right-0 bottom-0"
          minWidth={30}
          maxWidth={200}
          minHeight={30}
          maxHeight={200}
          keepAspectRatio
          onResize={(_, { width }) => setSize(width)}
        >
          <ResizeIcon />
        </NodeResizeControl>
      )}
      <div onContextMenu={handleContextMenu} className="h-full w-full">
        <Popover>
          <PopoverTrigger asChild>
            <div
              className={`relative flex items-center justify-center h-full w-full shadow-lg group !transition-all !duration-500 ${
                isHovered ? "hover-effect" : ""
              } ${
                nodeData.isCompleted
                  ? `border-yellow-500 border-double !shadow-custom`
                  : "border-gray-500 rounded-sm"
              } ${
                nodeData.isCompleted
                  ? "!shadow-custom"
                  : ""
              }`}
              style={{ borderWidth: `${borderWidth}px` }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={nodeData.imageSrc || "/icons/google.svg"}
                alt={nodeData.alt || "Task Image"}
              
                objectFit="contain"
                width={size} 
                height={size} // Set default size to be responsive
                className={`bg-gray-100/90 p-0.5 ${
                  nodeData.isCompleted
                    ? "rounded-lg border-yellow-500 border"
                    : "rounded-sm border-gray-500"
                }`}
              />
              {isHovered && !dragging && !popoverOpen && (
                <span
                  className="custom-node-title absolute z-50 font-semibold font-pixel text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-yellow-500 to-yellow-600 p-1"
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {nodeData.name}
                </span>
              )}
            </div>
          </PopoverTrigger>

          <PopoverContent
            onOpenAutoFocus={() => {
              setPopoverOpen(true);
            }}
            onCloseAutoFocus={() => {
              setPopoverOpen(false);
            }}
            className="p-4 mt-4 bg-gray-800 text-white rounded-md shadow-lg"
          >
            <div className="flex flex-wrap">
              <Image
                src={nodeData.imageSrc || "/achvAIrm.png"}
                alt={nodeData.alt || "Task Image"}
                width={48}
                height={48}
                className="bg-gray-200 rounded-md shadow-lg"
              />

              <h3 className="text-md font-semibold font-pixel text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-yellow-500 to-yellow-600 p-2 -mb-3 mt-2">
                {nodeData.name}
              </h3>
              <p className="min-w-40 mt-3">{nodeData.description}</p>
            </div>
          </PopoverContent>
        </Popover>

        {nodeData.connections.up !== null && (
          <>
            <Handle
              type={nodeData.connections.up}
              position={Position.Top}
              id={`${id}-up`}
              className="z-20 !bg-transparent !border-0 handle -mt-1"
              isConnectable={isConnectable}
              width={20}
              height={20}
            />
            <div className="absolute top-0 left-1/2 -mt-2 transform -translate-x-1/2 z-10">
              <Image
                src={
                  nodeData.connections.up === "target"
                    ? TriangleDownIcon
                    : TriangleUpIcon
                }
                alt="Triangle Up"
                width={8}
                height={8}
              />
            </div>
          </>
        )}

        {nodeData.connections.down !== null && (
          <>
            <Handle
              type={nodeData.connections.down}
              position={Position.Bottom}
              id={`${id}-down`}
              className="z-20 !bg-transparent !border-0 handle -mb-1"
              isConnectable={isConnectable}
              width={20}
              height={20}
            />
            <div className="absolute bottom-0 left-1/2 -mb-2 transform -translate-x-1/2 z-10">
              <Image
                src={
                  nodeData.connections.down === "target"
                    ? TriangleUpIcon
                    : TriangleDownIcon
                }
                alt="Triangle Down"
                width={8}
                height={8}
              />
            </div>
          </>
        )}

        {nodeData.connections.left !== null && (
          <>
            <Handle
              type={nodeData.connections.left}
              position={Position.Left}
              id={`${id}-left`}
              className="z-20 -mt-0.5 -ml-1 !bg-transparent !border-0"
              isConnectable={isConnectable}
              width={20}
              height={20}
            />
            <div className="absolute left-0 top-1/2 -ml-2 -mt-0.5 transform -translate-y-1/2 z-10">
              <Image
                src={
                  nodeData.connections.left === "target"
                    ? TriangleRightIcon
                    : TriangleLeftIcon
                }
                alt="Triangle Left"
                width={8}
                height={8}
              />
            </div>
          </>
        )}

        {nodeData.connections.right !== null && (
          <>
            <Handle
              type={nodeData.connections.right}
              position={Position.Right}
              id={`${id}-right`}
              className="z-20 -mt-0.5 -mr-1 !bg-transparent !border-0"
              isConnectable={isConnectable}
              width={20}
              height={20}
            />
            <div className="absolute right-0 top-1/2 -mr-2 -mt-0.5 transform -translate-y-1/2 z-10">
              <Image
                src={
                  nodeData.connections.right === "target"
                    ? TriangleLeftIcon
                    : TriangleRightIcon
                }
                alt="Triangle Right"
                width={8}
                height={8}
              />
            </div>
          </>
        )}
        {dialogOpen && (
          <div className="absolute -ml-1 -mt-4 z-20">
            <TaskDialog nodeData={nodeData} onSave={handleSave} />
          </div>
        )}
      </div>
    </div>
  );
};

TaskNode.displayName = "TaskNode"; // Add display name

export default memo(TaskNode);