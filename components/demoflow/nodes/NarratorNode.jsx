import React from "react";
import { memo, useState, useEffect } from "react";
import { useReactFlow } from "@xyflow/react";
import { Position, NodeResizeControl } from "@xyflow/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypeAnimation } from "react-type-animation";
import "../../css/nodes.css";

import Lottie from "react-lottie";
import * as animationData from "@/public/animation/Narrate.json";

import ResizeIcon from "./ResizeIcon";

function NarratorNode({ id, data, isConnectable, dragging }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [nodeData, setNodeData] = useState(data);
  const { getNode, updateNodeData } = useReactFlow();
  const [isTyping, setIsTyping] = useState(true);

  const handleSave = (updatedData) => {
    const existingNode = getNode(id);
    if (!existingNode) return;

    const updatedNodeData = {
      name: updatedData.name,
      description: updatedData.description,
    };

    updateNodeData(id, updatedNodeData, { replace: false });

    setNodeData((prevData) => ({ ...prevData, ...updatedNodeData }));
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setDialogOpen(!dialogOpen);
  };

  useEffect(() => {
    setIsTyping(true); // Restart typing when nodeData.description changes
  }, [nodeData.description]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="relative w-full h-full">
      {dialogOpen && (
        <NodeResizeControl
          className="z-50 bg-transparent border-0 absolute right-0 bottom-0"
          minWidth={100}
          maxWidth={500}
          minHeight={100}
          maxHeight={500}
        >
          <ResizeIcon />
        </NodeResizeControl>
      )}

      <ScrollArea
        onContextMenu={handleContextMenu}
        className="nowheel p-2 flex flex-col border-double border-gray-500 border-4 text-sm w-full h-full overflow-y-auto"
      >
        <div className="w-full flex justify-center">
          <Lottie
            options={defaultOptions}
            height={70}
            width={70}
            isStopped={!isTyping}
          />
        </div>

        <div className="mt-2 text-white/85 font-hj text-lg !break-words whitespace-normal max-w-96">
          <TypeAnimation
            sequence={[
              "Please check out the tutorial session!",
              5000,
              500,
              () => {
                setIsTyping(true);
              },
              nodeData.description,
              () => {
                setIsTyping(false);
              },
              10000,
              10000,
            ]}
            wrapper="span"
            speed={50}
            repeat={1}
          />
        </div>
      </ScrollArea>
    </div>
  );
}

export default memo(NarratorNode);
