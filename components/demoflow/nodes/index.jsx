export default [
  {
    id: '1',
    type: 'task',
    data: { label: 'Input Node' , title: <div>Test Test</div>},
    position: { x: 250, y: 25 },
    
  },

  {
    id: '2',
    // you can also pass a React component as a label
    type: 'task2',
    data: { label: <div>Default Node</div>, title: <div>Test Test</div> },
    position: { x: 100, y: 125 },
    style: { backgroundColor: '#ff0072', color: 'white' },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
    style: { backgroundColor: '#6865A5', color: 'white' },
  },
  {
    id: '4',
    type: 'task',
    data: { label: 'Input Node' },
    position: { x: 250, y: 55 },
    style: { backgroundColor: '#6ede87', color: 'white' },
  },
];


