export default [
  {
    id: '1',
    type: 'task',
    data: {
      name: 'Setup Environment',
      description: 'Prepare the development environment by installing necessary tools and dependencies.',
      subtasks: ['Install Node.js', 'Install VSCode', 'Clone repository'],
      connections: {
        up: null,
        down: 'source',
        left: null,
        right: null,
      },
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    type: 'task',
    data: {
      name: 'Database Design',
      description: 'Design the database schema for the project.',
      subtasks: ['Identify entities', 'Define relationships', 'Create ER diagram'],
      connections: {
        up: 'target',
        down: 'source',
        left: null,
        right: null,
      },
    },
    position: { x: 300, y: 100 },
  },
  {
    id: '3',
    type: 'task',
    data: {
      name: 'Build API',
      description: 'Develop the RESTful API endpoints for the application.',
      subtasks: [],
      connections: {
        up: 'target',
        down: 'source',
        left: 'source',
        right: null,
      },
    },
    position: { x: 500, y: 100 },
  },
  {
    id: '4',
    type: 'task',
    data: {
      name: 'Frontend Development',
      description: 'Create the user interface for the application using React.',
      subtasks: ['Set up React project', 'Create components', 'Implement state management', 'Style components'],
      connections: {
        up: 'source',
        down: 'target',
        left: null,
        right: 'target',
      },
    },
    position: { x: 700, y: 100 },
  },
  {
    id: '5',
    type: 'task',
    data: {
      name: 'Testing & QA',
      description: 'Conduct thorough testing and quality assurance for the application.',
      subtasks: ['Write integration tests', 'Perform manual testing', 'Fix bugs', 'Document test cases'],
      connections: {
        up: 'source',
        down: null,
        left: 'target',
        right: 'source',
      },
    },
    position: { x: 900, y: 100 },
  },
];
