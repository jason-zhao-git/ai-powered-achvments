import React from 'react';
import { useStoreApi, useReactFlow, Panel } from '@xyflow/react';

// Import the SVG icons
import AddNodeIcon from '/public/icons/controls/add_node.svg';
import ZoomInIcon from '/public/icons/controls/zoom_in.svg';
import ZoomOutIcon from '/public/icons/controls/zoom_out.svg';
import FitViewIcon from '/public/icons/controls/fit_view.svg';
import ToggleInteractivityIcon from '/public/icons/controls/toggle_interactivity.svg';

const panelStyle = {
  color: '#777',
  fontSize: 12,
};

const buttonStyle = "flex items-center gap-3 rounded-lg p-2 text-base text-white/85 transition-colors duration-200 hover:bg-gray-200 hover:text-black hover:font-semibold";

const CustomControls = ({ onAddNode }) => {
  const store = useStoreApi();
  const { zoomIn, zoomOut, fitView } = useReactFlow();

  const onFitViewHandler = () => {
    fitView({ duration: 1000 });
  };

  const onToggleInteractivity = () => {
    const { nodesDraggable, nodesConnectable, elementsSelectable } = store.getState();
    store.setState({
      nodesDraggable: !nodesDraggable,
      nodesConnectable: !nodesConnectable,
      elementsSelectable: !elementsSelectable,
    });
  };

  return (
    <Panel position="top-center" style={panelStyle} className="z-50 bg-white bg-opacity-30 rounded-lg shadow-lg border-2 border-opacity-30 border-white backdrop-filter backdrop-blur-sm backdrop-saturate-200 flex flex-row">
      <button 
        onClick={onAddNode} 
        className={`bg-gray-200 ${buttonStyle}`}
        aria-label="Add Node"
        title="Add Node"
      >
        <img src={AddNodeIcon} alt="Add Node" />
      </button>
      <button 
        onClick={zoomIn} 
        className={`bg-gray-200 ${buttonStyle}`}
        aria-label="Zoom In"
        title="Zoom In"
      >
        <img src={ZoomInIcon} alt="Zoom In" />
      </button>
      <button 
        onClick={zoomOut} 
        className={`bg-gray-200 ${buttonStyle}`}
        aria-label="Zoom Out"
        title="Zoom Out"
      >
        <img src={ZoomOutIcon} alt="Zoom Out" />
      </button>
      <button 
        onClick={onFitViewHandler} 
        className={`bg-gray-200 ${buttonStyle}`}
        aria-label="Fit View"
        title="Fit View"
      >
        <img src={FitViewIcon} alt="Fit View" />
      </button>
      <button 
        onClick={onToggleInteractivity} 
        className={`bg-gray-200 ${buttonStyle}`}
        aria-label="Toggle Interactivity"
        title="Toggle Interactivity"
      >
        <img src={ToggleInteractivityIcon} alt="Toggle Interactivity" />
      </button>
    </Panel>
  );
};

export default CustomControls;
