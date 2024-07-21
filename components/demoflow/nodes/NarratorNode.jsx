import { memo, useState } from "react";
import { useReactFlow } from "@xyflow/react";
import { Position, NodeResizeControl } from "@xyflow/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypeAnimation } from "react-type-animation";
import "../../css/nodes.css";

function NarratorNode({ id, data, isConnectable, dragging }) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [nodeData, setNodeData] = useState(data);
    const { getNode, updateNodeData } = useReactFlow();
  
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
          <div className="font-semibold text-white !break-words whitespace-normal">
            {nodeData.name}
          </div>
          <div className="mt-2 text-white/90 !break-words whitespace-normal max-w-72">
            <TypeAnimation
              sequence={[
                nodeData.description,
                10000, // Delay before loop
                "",
                500, // Delay before restarting
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </ScrollArea>
        {dialogOpen && (
          <div className="absolute -mt-4 z-50">
            <AnnotationDialog nodeData={nodeData} onSave={handleSave} />
          </div>
        )}
      </div>
    );
  }
  
  function ResizeIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#ff0071"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ position: "absolute", right: 5, bottom: 5 }}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="16 20 20 20 20 16" />
        <line x1="14" y1="14" x2="20" y2="20" />
        <polyline points="8 4 4 4 4 8" />
        <line x1="4" y1="4" x2="10" y2="10" />
      </svg>
    );
  }
export default memo(NarratorNode);