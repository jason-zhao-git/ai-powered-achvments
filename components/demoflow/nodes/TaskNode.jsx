"use client";
import React, { memo, useState } from "react";
import { Handle, Position } from "@xyflow/react";
import Image from "next/image";
import "../../css/nodes.css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


export default memo(({ data, isConnectable }) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <div
            className="relative flex items-center justify-center bg-transparent border-2 border-gray-500 rounded-md shadow-lg group !transition-all !duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={data.imageSrc || "/icons/google.svg"}
              alt={data.alt || "Task Image"}
              width={24}
              height={24}
            />
            {isHovered && <span className=" text-white px-2">{data.title}</span>}
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-4 bg-gray-800 text-white rounded-md shadow-lg">
          <div className="flex items-center space-x-4">
            <Image
              src={data.imageSrc || "/achvAIrm.png"}
              alt={data.alt || "Task Image"}
              width={48}
              height={48}
            />
            <div>
              <h3 className="text-lg font-semibold">{data.title}</h3>
              <p>{data.description}</p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <Handle
        type="target"
        position={Position.Top}
        className="bg-gray-900"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="bg-gray-900"
        isConnectable={isConnectable}
      />
    </>
  );
});
