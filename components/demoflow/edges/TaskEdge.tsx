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
      ? { stroke: 'lightgrey', strokeWidth: '2px' }
      : { stroke: 'lightgrey', strokeWidth: '0.5px' };

  return (
    <>
      <path
        id={id}
        style={{ ...style, ...edgeStyle }}
        className={`react-flow__edge-path ${completedSource && !completedTarget ? 'animated' : ''}`}
        d={edgePath}
        markerEnd={markerEnd}

      />
    </>
  );
};

export default TaskEdge;
