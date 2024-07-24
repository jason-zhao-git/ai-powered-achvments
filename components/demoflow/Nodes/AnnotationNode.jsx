import { memo, useState } from "react";
import { useReactFlow } from "@xyflow/react";
import { Position, NodeResizeControl } from "@xyflow/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import AnnotationDialog from "../addnodes/AnnotationDialog.jsx"; // Import the dialog component
import "../../css/nodes.css";

import ResizeIcon from "./ResizeIcon.jsx";

function AnnotationNode({ id, data, isConnectable, dragging }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [nodeData, setNodeData] = useState(data);
  const { getNode, updateNodeData } = useReactFlow();

  const handleSave = (updatedData) => {
    const existingNode = getNode(id);
    if (!existingNode) return;

    const updatedNodeData = {
      name: updatedData.name,
      description: updatedData.description,
      arrowStyle: updatedData.arrowStyle,
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
          maxWidth={550}
          minHeight={100}
          maxHeight={550}
        >
          <ResizeIcon />
        </NodeResizeControl>
      )}
      <ScrollArea
        onContextMenu={handleContextMenu}
        className="nowheel p-2 flex flex-col border-double border-gray-500 border-4 text-sm w-full h-full overflow-y-auto"
        style={{ maxHeight: '550px', maxWidth: '550px' }} // Set default size
      >
        <div className="font-semibold text-white !break-words whitespace-pre-line"> 
          {/* use whitespace-pre-line to handle new lines */}
          {nodeData.name}
        </div>
        <div className="mt-2 text-white/90 !break-words whitespace-pre-line">
          {/* use whitespace-pre-line to handle new lines */}
          {nodeData.description}
        </div>
        {nodeData.arrowStyle && nodeData.arrowStyle !== "none" && (
          <div
            className="arrow"
            style={
              nodeData.arrowStyle === "left"
                ? {
                    left: 0,
                    bottom: 0,
                    transform:
                      "translate(5px, 25px) scale(1, -1) rotate(100deg)",
                  }
                : nodeData.arrowStyle === "right"
                ? {
                    right: 0,
                    bottom: 0,
                    transform: "translate(-30px,10px) rotate(-80deg)",
                  }
                : {}
            }
          >
            ⤹
          </div>
        )}
      </ScrollArea>
      {dialogOpen && (
        <div className="absolute -mt-4 z-50">
          <AnnotationDialog nodeData={nodeData} onSave={handleSave} />
        </div>
      )}
    </div>
  );
}

export default memo(AnnotationNode);
