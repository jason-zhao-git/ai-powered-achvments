import React, { useState } from 'react';
import { useStoreApi, useReactFlow, Panel } from '@xyflow/react';
import Image from 'next/image';

import AddNodeIcon from '../../public/Icons/Controls/add-node.svg';
import ZoomInIcon from '../../public/Icons/Controls/zoom-in.svg';
import ZoomOutIcon from '../../public/Icons/Controls/zoom-out.svg';
import FitViewIcon from '../../public/Icons/Controls/fit-view.svg';
import LockIcon from '../../public/Icons/Controls/Lock.svg';
import UnlockIcon from '../../public/Icons/Controls/Unlock.svg';

import SearchBar from './SearchBar.jsx'; // Ensure the correct import path

const panelStyle = {
  color: '#777',
  fontSize: 12,
};

const buttonStyle = "flex items-center gap-3 rounded-lg p-2 text-base text-white/85 transition-colors duration-200 hover:bg-gray-200 hover:text-black hover:font-semibold";

const CustomControls = ({ onAddNode, onSearch }) => {
  const store = useStoreApi();
  const { zoomIn, zoomOut, fitView } = useReactFlow();
  const [isInteractive, setIsInteractive] = useState(true);

  const onFitViewHandler = () => {
    fitView({ duration: 1000 });
  };

  const onToggleInteractivity = () => {
    const { nodesDraggable, nodesConnectable, elementsSelectable } = store.getState();
    const newInteractivityState = !nodesDraggable;
    store.setState({
      nodesDraggable: newInteractivityState,
      nodesConnectable: newInteractivityState,
      elementsSelectable: newInteractivityState,
    });
    setIsInteractive(newInteractivityState);
  };

  return (
    <div>
      <Panel position="top-center" style={panelStyle} className="z-50 bg-white bg-opacity-30 rounded-lg shadow-lg border-2 border-opacity-30 border-white backdrop-filter backdrop-blur-sm backdrop-saturate-200 flex flex-row">
        <button 
          onClick={onAddNode} 
          className={` ${buttonStyle}`}
          aria-label="Add Node"
          title="Add Node"
        >
          <Image src={AddNodeIcon} alt="Add Node" width={24} height={24} />
        </button>
        <button 
          onClick={zoomIn} 
          className={` ${buttonStyle}`}
          aria-label="Zoom In"
          title="Zoom In"
        >
          <Image src={ZoomInIcon} alt="Zoom In" width={24} height={24} />
        </button>
        <button 
          onClick={zoomOut} 
          className={` ${buttonStyle}`}
          aria-label="Zoom Out"
          title="Zoom Out"
        >
          <Image src={ZoomOutIcon} alt="Zoom Out" width={24} height={24} />
        </button>
        <button 
          onClick={onFitViewHandler} 
          className={` ${buttonStyle}`}
          aria-label="Fit View"
          title="Fit View"
        >
          <Image src={FitViewIcon} alt="Fit View" width={24} height={24} />
        </button>
        <button 
          onClick={onToggleInteractivity} 
          className={` ${buttonStyle}`}
          aria-label="Toggle Interactivity"
          title="Toggle Interactivity"
        >
          <Image src={isInteractive ? UnlockIcon : LockIcon} alt="Toggle Interactivity" width={24} height={24} />
        </button>
        
      </Panel>
      <Panel position="top-center" className='mt-16 z-50 bg-white bg-opacity-30 rounded-lg shadow-lg border-2 border-opacity-30 border-white backdrop-filter backdrop-blur-sm backdrop-saturate-200 flex flex-row'>
        <div className="w-full border-0">
          <SearchBar onSearch={onSearch} />
        </div>
      </Panel>
    </div>
  );
};

export default CustomControls;