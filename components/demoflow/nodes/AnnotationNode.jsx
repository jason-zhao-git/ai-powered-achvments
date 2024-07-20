import { memo, useState } from "react";
import { useReactFlow } from "@xyflow/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import AnnotationDialog from "../AddNode/AnnotationDialog.jsx"; // Import the dialog component
import "../../css/nodes.css";

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
    <>
      <ScrollArea
        onContextMenu={handleContextMenu}
        className="nowheel p-2 flex flex-col border-double border-gray-500 border-4 text-sm max-w-48 max-h-56 overflow-y-auto"
      >
        <div className="font-semibold text-white">{nodeData.name}</div>
        <div className="mt-2 text-white/90">{nodeData.description}</div>
        {nodeData.arrowStyle && nodeData.arrowStyle !== "none" && (
          <div
            className="arrow"
            style={
              nodeData.arrowStyle === "left"
                ? {
                    left: 0,
                    bottom: 0,
                    transform: "translate(5px, 25px) scale(1, -1) rotate(100deg)",
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
    </>
  );
}

export default memo(AnnotationNode);
