"use client";
import React, { memo, useState } from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";
import Image from "next/image";
import "../../css/nodes.css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TriangleUpIcon from "/public/Icons/Nodes/triangle-up.svg";
import TriangleDownIcon from "/public/Icons/Nodes/triangle-down.svg";
import TriangleLeftIcon from "/public/Icons/Nodes/triangle-left.svg";
import TriangleRightIcon from "/public/Icons/Nodes/triangle-right.svg"; 

const TaskNode = ({ data, isConnectable, dragging }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <div
            className={`relative flex items-center justify-center bg-transparent border-2 border-gray-500 rounded-md shadow-lg group !transition-all !duration-500 ${
              isHovered ? "hover-effect" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={data.imageSrc || "/icons/google.svg"}
              alt={data.alt || "Task Image"}
              width={24}
              height={24}
            />
            {isHovered && !dragging && (
              <span className=" custom-node-title absolute -mr-48 font-semibold font-pixel text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-yellow-500 to-yellow-600 p-1">
                {data.name}
              </span>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-4 mt-4 bg-gray-800 text-white rounded-md shadow-lg">
          <div className="flex flex-wrap">
            <Image
              src={data.imageSrc || "/achvAIrm.png"}
              alt={data.alt || "Task Image"}
              width={48}
              height={48}
            />

            <h3 className="text-md font-semibold font-pixel text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-yellow-500 to-yellow-600 p-2 -mb-3 mt-2">
              {data.name}
            </h3>
            <p>{data.description}</p>
          </div>
        </PopoverContent>
      </Popover>

      {data.connections.up !== null && (
        <>
          <Handle
            type={data.connections.up}
            position={Position.Top}
            className="z-20 !bg-transparent !border-0 handle"
            isConnectable={isConnectable}
          />
          <div className="absolute top-0 left-1/2 -mt-2 transform -translate-x-1/2 z-10">
            <Image
              src={
                data.connections.up === "target"
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

      {data.connections.down !== null && (
        <>
          <Handle
            type={data.connections.down}
            position={Position.Bottom}
            className="z-20 !bg-transparent !border-0 handle"
            isConnectable={isConnectable}
          />
          <div className="absolute bottom-0 left-1/2 -mb-1 transform -translate-x-1/2 z-10">
            <Image
              src={
                data.connections.down === "target"
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

      {data.connections.left !== null && (
        <>
          <Handle
            type={data.connections.left}
            position={Position.Left}
            className="z-20 -mt-0.5 -ml-1 !bg-transparent !border-0"
            isConnectable={isConnectable}
          />
          <div className="absolute left-0 top-1/2 -ml-2 -mt-0.5 transform -translate-y-1/2 z-10">
            <Image
              src={
                data.connections.left === "target"
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

      {data.connections.right !== null && (
        <>
          <Handle
            type={data.connections.right}
            position={Position.Right}
            className="z-20 -mt-0.5 -mr-1 !bg-transparent !border-0"
            isConnectable={isConnectable}
          />
          <div className="absolute right-0 top-1/2 -mr-2 -mt-0.5 transform -translate-y-1/2 z-10">
            <Image
              src={
                data.connections.right === "target"
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
    </>
  );
};

export default memo(TaskNode);
