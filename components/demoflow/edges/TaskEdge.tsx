import React from 'react';
import { EdgeProps, getSmoothStepPath } from '@xyflow/react';
import { useReactFlow } from '@xyflow/react';

const TaskEdge = ({
  id,
  source,
  target,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  animated,
}: EdgeProps) => {
  const { getNode } = useReactFlow();
  
  const sourceNode = getNode(source);
  const targetNode = getNode(target);

  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const completedSource = sourceNode?.data?.isCompleted;
  const completedTarget = targetNode?.data?.isCompleted;

  const edgeStyle =
    completedSource && completedTarget
      ? { stroke: 'lightgrey', strokeWidth: '3px', filter: 'brightness(1.5)' }
      : completedSource && !completedTarget
      ? { stroke: 'lightgrey', strokeWidth: '2px', animation: 'dash 5s linear infinite' }
      : { stroke: 'lightgrey', strokeWidth: '2.5px' };

  return (
    <>
      <path
        id={id}
        style={{ ...style, ...edgeStyle }}
        className={`react-flow__edge-path ${animated ? 'animated' : ''}`}
        d={edgePath}
        markerEnd={markerEnd}
      />
    </>
  );
};

export default TaskEdge;
