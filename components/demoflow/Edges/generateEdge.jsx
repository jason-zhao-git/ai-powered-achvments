export const generateEdges = (nodes) => {
    const edges = [];
  
    nodes.forEach((node) => {
      Object.keys(node.data.connections).forEach((direction) => {
        const connection = node.data.connections[direction];
        if (connection) {
          let targetNodeId;
          let targetDirection;
  
          switch (direction) {
            case 'up':
              targetNodeId = nodes.find(n => n.id === node.id - 1)?.id;
              targetDirection = 'down';
              break;
            case 'down':
              targetNodeId = nodes.find(n => n.id === node.id + 1)?.id;
              targetDirection = 'up';
              break;
            case 'left':
              targetNodeId = nodes.find(n => n.id === node.id - 1)?.id;
              targetDirection = 'right';
              break;
            case 'right':
              targetNodeId = nodes.find(n => n.id === node.id + 1)?.id;
              targetDirection = 'left';
              break;
            default:
              break;
          }
  
          if (targetNodeId) {
            edges.push({
              id: `${node.id}-${direction}-${targetNodeId}-${targetDirection}`,
              source: `${node.id}`,
              sourceHandle: `${node.id}-${direction}`,
              target: `${targetNodeId}`,
              targetHandle: `${targetNodeId}-${targetDirection}`,
            });
          }
        }
      });
    });
  
    return edges;
  };
  
  export const edges = generateEdges(nodes);
  