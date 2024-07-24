export const mainNodes = [
  {
    id: "1",
    type: "narrator",
    position: { x: 250, y: 150 },
    data: {
      name: "Narrator",
      description: `
          Once upon a time, in a land of endless possibilities, there lived a person who sought the great achievement of life. 
          \n Through trials and tribulations, they forged their path with unwavering determination. 
          \n Each step they took was a testament to their resilience and spirit. 
          \n In the end, their journey became a beacon of hope and inspiration for all. 
          This is the tale of that remarkable journey, a story of courage, perseverance, and triumph.
        `,
    },
  },
];

export const tutorialNodes = [
  {
    id: "30",
    data: {
      name: "Tips",
      description: "Use minimap buttom right to navigate the whole graph.",
      arrowStyle: "none",
    },
    position: {
      x: 707.332515885027,
      y: 1390.18762543973,
    },
    type: "annotation",
    measured: {
      width: 166,
      height: 115,
    },
    selected: false,
    dragging: false,
    width: 166,
    height: 115,
    resizing: false,
  },
  {
    id: "29",
    data: {
      name: "Parent Check",
      description:
        "Only when all previous achievements acomplished can you complete the child quest.",
      arrowStyle: "none",
    },
    position: {
      x: 151.31958753168198,
      y: 1242.187067642953,
    },
    type: "annotation",
    measured: {
      width: 550,
      height: 92,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "28",
    data: {
      name: "Child",
      description: "C",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T01:16:08.914Z",
      completedAt: null,
    },
    position: {
      x: 336.0041620032472,
      y: 1382.202351588124,
    },
    type: "task",
    measured: {
      width: 110,
      height: 110,
    },
    selected: false,
    dragging: false,
    width: 110,
    height: 110,
    resizing: false,
  },
  {
    id: "27",
    data: {
      name: "Parent2",
      description: "2",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T01:15:47.201Z",
      completedAt: null,
    },
    position: {
      x: 510.896799790433,
      y: 1581.8230755977386,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "26",
    data: {
      name: "Parent1",
      description: "A",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: true,
      createdAt: "2024-07-23T01:15:39.217Z",
      completedAt: "2024-07-23T01:16:29.673Z",
    },
    position: {
      x: 231.9833885336547,
      y: 1578.2298036540183,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "25",
    data: {
      name: "Congratulations! You finished tutorial!",
      description:
        "Please go ahead and check out the example quests and edit/play with them at will!",
      arrowStyle: "none",
    },
    position: {
      x: 152.1919285792498,
      y: 1699.7472709756107,
    },
    type: "annotation",
    measured: {
      width: 550,
      height: 92,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "24",
    data: {
      name: "CCC",
      description: "C",
      subtasks: [],
      connections: {
        up: null,
        down: null,
        left: "target",
        right: "source",
      },
      isCompleted: false,
      createdAt: "2024-07-23T01:07:22.773Z",
      completedAt: null,
    },
    position: {
      x: 361.7143385107991,
      y: 974.0605047980561,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "23",
    data: {
      name: "DDD",
      description: "D",
      subtasks: [],
      connections: {
        up: null,
        down: null,
        left: "source",
        right: "target",
      },
      isCompleted: false,
      createdAt: "2024-07-23T01:06:48.173Z",
      completedAt: null,
    },
    position: {
      x: 364.58724240018955,
      y: 1106.1690156289417,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "22",
    data: {
      name: "BBB",
      description: "B",
      subtasks: [],
      connections: {
        up: "target",
        down: "source",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T01:06:27.725Z",
      completedAt: null,
    },
    position: {
      x: 482.48795710073284,
      y: 1034.2287214674839,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "21",
    data: {
      name: "AAAA",
      description: "A",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T01:06:12.165Z",
      completedAt: null,
    },
    position: {
      x: 216.94338034645673,
      y: 1033.6954513223923,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "20",
    data: {
      name: "Cycle detection",
      description:
        "Creating a cycle is not allowed! This will cause the tasks to be unable to be completed in order.",
      arrowStyle: "none",
    },
    position: {
      x: 149.82926500984934,
      y: 804.3673538513746,
    },
    type: "annotation",
    measured: {
      width: 550,
      height: 92,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "19",
    data: {
      name: "Tips:",
      description: "Move the node a little bit to see edges change.",
      arrowStyle: "none",
    },
    position: {
      x: 737.5145568999458,
      y: 449.84117723274284,
    },
    type: "annotation",
    measured: {
      width: 135,
      height: 117,
    },
    selected: false,
    dragging: false,
    width: 135,
    height: 117,
    resizing: false,
  },
  {
    id: "18",
    data: {
      name: "STST",
      description: "STST",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: "source",
        right: "target",
      },
      isCompleted: false,
      createdAt: "2024-07-23T01:01:20.357Z",
      completedAt: null,
    },
    position: {
      x: 219.63279330496184,
      y: 596.3458330512747,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "17",
    data: {
      name: "SSSS",
      description: "SSSS",
      subtasks: [],
      connections: {
        up: "source",
        down: "source",
        left: "source",
        right: "source",
      },
      isCompleted: true,
      createdAt: "2024-07-23T01:00:36.557Z",
      completedAt: "2024-07-23T01:02:39.214Z",
    },
    position: {
      x: 402.9400608761797,
      y: 580.0851478210259,
    },
    type: "task",
    measured: {
      width: 77,
      height: 77,
    },
    selected: false,
    dragging: false,
    resizing: false,
    width: 77,
    height: 77,
  },
  {
    id: "16",
    data: {
      name: "TTTS",
      description: "TTTS",
      subtasks: [],
      connections: {
        up: "target",
        down: "target",
        left: "target",
        right: "source",
      },
      isCompleted: false,
      createdAt: "2024-07-23T00:59:36.171Z",
      completedAt: null,
    },
    position: {
      x: 418.418116850345,
      y: 717.6034430147084,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "15",
    data: {
      name: "SSTT",
      description: "SSTT",
      subtasks: [],
      connections: {
        up: "source",
        down: "source",
        left: "target",
        right: "target",
      },
      isCompleted: false,
      createdAt: "2024-07-23T00:59:18.099Z",
      completedAt: null,
    },
    position: {
      x: 577.5037920158488,
      y: 586.4536211959348,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "13",
    data: {
      name: "STTN",
      description: "Src target target none",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: "target",
        right: null,
      },
      isCompleted: true,
      createdAt: "2024-07-23T00:58:12.153Z",
      completedAt: "2024-07-23T01:19:48.558Z",
    },
    position: {
      x: 418.4733455305795,
      y: 465.2267525320998,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "12",
    data: {
      name: "Sockets",
      description:
        "You can set socket type in add node session and connect however many edges to want, as long as it is from a Source(outward arrow) to Target(inward arrow).",
      arrowStyle: "none",
    },
    position: {
      x: 174.86869075287228,
      y: 332.7762735034881,
    },
    type: "annotation",
    measured: {
      width: 550,
      height: 92,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "11",
    data: {
      name: "Create Yout First Quest!",
      description:
        "Click the add node button above the search bar, you can create a new node!\n\nRight click to edit the node and change its size! Click the little pen on the buttom left corner after you right clicked the node to make real time changes!",
      arrowStyle: "none",
    },
    position: {
      x: 213.86804802374763,
      y: 111.97926821882558,
    },
    type: "annotation",
    measured: {
      width: 443,
      height: 171,
    },
    selected: false,
    dragging: false,
    width: 443,
    height: 171,
    resizing: false,
  },
  {
    id: "10",
    data: {
      name: "Hello World!",
      description: "Your first quest!",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T00:52:24.329Z",
      completedAt: null,
    },
    position: {
      x: 731.2141743867032,
      y: 119.2153868640693,
    },
    type: "task",
    measured: {
      width: 152,
      height: 152,
    },
    width: 152,
    height: 152,
    resizing: false,
    selected: false,
    dragging: false,
  },
  {
    id: "9",
    data: {
      name: "Completed Quest",
      description:
        "The completed quest will be shiny! Only after you completed all the parent quest can you mark a new quest conpleted. Play with the setup above.",
      arrowStyle: "none",
    },
    position: {
      x: 177.39890439739725,
      y: -60.58428652951695,
    },
    type: "annotation",
    measured: {
      width: 550,
      height: 92,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "8",
    data: {
      name: "Explore the buttons above!",
      description: "Hover to see their label! Search the node name!",
      arrowStyle: "none",
    },
    position: {
      x: 304.6756718470956,
      y: -649.3247731363557,
    },
    type: "annotation",
    measured: {
      width: 339,
      height: 72,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "7",
    data: {
      name: "Basic Usage 2",
      description:
        ">Delete Nodes\nDelete Key: Select one or multiple nodes and press the Delete key to remove them from the canvas.\n\n>Connecting Nodes\nMouse: Hover on a node's handle (small triangle) and drag to another node's handle to create a connection (edge).\nClick edge and press Delete key to delete it.\n\n>Panning the Canvas\nMouse: Click and hold on an empty space on the canvas, then drag to move around the canvas.\n\n>Zooming\nMouse Wheel: Use the mouse wheel to zoom in and out of the canvas.\nPanel Button: Use the panel button above.",
      arrowStyle: "none",
    },
    position: {
      x: 697.95267772811,
      y: -433.2799489373418,
    },
    type: "annotation",
    measured: {
      width: 393,
      height: 349,
    },
    width: 393,
    height: 349,
    resizing: false,
    selected: false,
    dragging: false,
  },
  {
    id: "6",
    data: {
      name: "Exp4",
      description: "Example task with 4 targets",
      subtasks: [],
      connections: {
        up: "target",
        down: "target",
        left: "target",
        right: "target",
      },
      isCompleted: false,
      createdAt: "2024-07-23T00:12:40.692Z",
      completedAt: null,
      imageSrc: "/Icons/task4.svg",
    },
    position: {
      x: 283.0923945082769,
      y: -275.7490565849333,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "5",
    data: {
      name: "Exp3",
      description: "A node with 3 sockets",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T00:11:29.033Z",
      completedAt: null,
      imageSrc: "/Icons/task3.svg",
    },
    position: {
      x: 453.35668844331417,
      y: -316.14639155019273,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "4",
    data: {
      name: "Exp2",
      description:
        "This is an example, with 3 source sockets and 1 target socket.",
      subtasks: [],
      connections: {
        up: "source",
        down: "source",
        left: "source",
        right: "source",
      },
      isCompleted: true,
      createdAt: "2024-07-23T00:10:54.529Z",
      completedAt: "2024-07-23T00:35:52.194Z",
      imageSrc: "/Icons/task2.svg",
    },
    position: {
      x: 430.7919771250247,
      y: -188.29295351751205,
    },
    type: "task",
    measured: {
      width: 91,
      height: 91,
    },
    selected: false,
    dragging: false,
    width: 91,
    height: 91,
    resizing: false,
  },
  {
    id: "3",
    data: {
      name: "Exp1",
      description: "This is an example node.",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: true,
      createdAt: "2024-07-23T00:09:50.920Z",
      completedAt: "2024-07-23T00:37:01.516Z",
      imageSrc: "/Icons/task1.svg",
    },
    position: {
      x: 593.4337971978762,
      y: -358.54814674012846,
    },
    type: "task",
    measured: {
      width: 43,
      height: 43,
    },
    selected: false,
    dragging: false,
    width: 43,
    height: 43,
    resizing: false,
  },
  {
    id: "2",
    data: {
      name: "Basic Usage",
      description:
        "> Drag and Drop Nodes\nMouse: Click and hold on any node to drag it to your desired position on the canvas.\n\n>Viewing Node Details\nLeft Click: Popup will show the description.\nRight Click: Edit Node and adjust its size.\n\n>Multiple Selection\nShift + Click: Hold the Shift key and click on multiple nodes to select them simultaneously.\n",
      arrowStyle: "none",
    },
    position: {
      x: -97.84901751452817,
      y: -456.0039401229608,
    },
    type: "annotation",
    measured: {
      width: 359,
      height: 290,
    },
    selected: false,
    dragging: false,
    width: 359,
    height: 290,
    resizing: false,
  },
  {
    id: "1",
    data: {
      name: "Welcome!",
      description:
        "Welcome to the tutorial session, here we will talk throught basic operations to help you build your quest!",
      arrowStyle: "none",
    },
    position: {
      x: 276.0195731644893,
      y: -558.3989489991325,
    },
    type: "annotation",
    measured: {
      width: 395,
      height: 92,
    },
    selected: false,
    dragging: false,
    width: 395,
    height: 92,
    resizing: false,
  },
];

export const codeNodes = [
  {
    "id": "16",
    "data": {
      "name": "BuZZ Word!",
      "description": "AIAIAIAI, Develop a basic machine learning model using scikit-learn.",
      "subtasks": [],
      "connections": {
        "up": "target",
        "down": "source",
        "left": null,
        "right": "target"
      },
      "isCompleted": false,
      "createdAt": "2024-07-23T08:05:06.985Z",
      "completedAt": null,
      "imageSrc": "/Icons/BuZZWord.svg"
    },
    "position": {
      "x": -290.45504963047074,
      "y": 481.29957094385935
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "15",
    "data": {
      "name": "Full Stackkkkk",
      "description": "Build a Nextjs frontend + a Django Restful API.",
      "subtasks": [],
      "connections": {
        "up": "target",
        "down": "source",
        "left": "target",
        "right": null
      },
      "isCompleted": false,
      "createdAt": "2024-07-23T08:02:37.836Z",
      "completedAt": null,
      "imageSrc": "/Icons/FullStackkkkk.svg"
    },
    "position": {
      "x": 493.37339082340145,
      "y": 354.18332212621186
    },
    "type": "task",
    "measured": {
      "width": 124,
      "height": 124
    },
    "selected": false,
    "dragging": false,
    "width": 124,
    "height": 124,
    "resizing": false
  },
  {
    "id": "14",
    "data": {
      "name": "A Piece of Ma Mind",
      "description": "Build a profolio website with API integration.",
      "subtasks": [],
      "connections": {
        "up": null,
        "down": null,
        "left": "target",
        "right": "source"
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T08:00:49.083Z",
      "completedAt": "2024-07-23T22:55:53.542Z",
      "imageSrc": "/Icons/APieceofMaMind.svg"
    },
    "position": {
      "x": 788.544377336267,
      "y": 94.02837900682198
    },
    "type": "task",
    "measured": {
      "width": 110,
      "height": 110
    },
    "selected": false,
    "dragging": false,
    "width": 110,
    "height": 110,
    "resizing": false
  },
  {
    "id": "13",
    "data": {
      "name": "React Kitty",
      "description": "I think I know programing? Sorta",
      "subtasks": [],
      "connections": {
        "up": "target",
        "down": "source",
        "left": "source",
        "right": "source"
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T07:58:58.000Z",
      "completedAt": "2024-07-23T22:55:44.966Z",
      "imageSrc": "/Icons/ReactKitty.svg"
    },
    "position": {
      "x": 559.9572096718186,
      "y": 173.84694495501722
    },
    "type": "task",
    "measured": {
      "width": 69,
      "height": 69
    },
    "selected": false,
    "dragging": false,
    "width": 69,
    "height": 69,
    "resizing": false
  },
  {
    "id": "12",
    "data": {
      "name": "Junior JS",
      "description": "Well, Javascript.",
      "subtasks": [],
      "connections": {
        "up": null,
        "down": "source",
        "left": null,
        "right": null
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T07:57:39.414Z",
      "completedAt": "2024-07-23T22:54:34.353Z",
      "imageSrc": "/Icons/JuniorJS.svg"
    },
    "position": {
      "x": 651.2351077004004,
      "y": -69.47246777022944
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "11",
    "data": {
      "name": "Fancier LaTeX",
      "description": "Learn HTML + CSS from odin project!",
      "subtasks": [],
      "connections": {
        "up": null,
        "down": "source",
        "left": null,
        "right": null
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T07:56:22.061Z",
      "completedAt": "2024-07-23T22:54:28.643Z",
      "imageSrc": "/Icons/FancierLaTeX.svg"
    },
    "position": {
      "x": 483.19116494746015,
      "y": -68.59862780626136
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "10",
    "data": {
      "name": "Rabbit Hole",
      "description": "Build a simple web application using Flask or Django.",
      "subtasks": [],
      "connections": {
        "up": "target",
        "down": "source",
        "left": "source",
        "right": null
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T07:52:19.648Z",
      "completedAt": "2024-07-23T22:56:22.479Z",
      "imageSrc": "/Icons/RabbitHole.svg"
    },
    "position": {
      "x": -23.165962170895156,
      "y": 384.23812910280674
    },
    "type": "task",
    "measured": {
      "width": 65,
      "height": 65
    },
    "selected": false,
    "dragging": false,
    "width": 65,
    "height": 65,
    "resizing": false
  },
  {
    "id": "9",
    "data": {
      "name": "Life Sentence",
      "description": "Debugging for 6h without help! Not the best prectice but shows your spirit!",
      "subtasks": [],
      "connections": {
        "up": "target",
        "down": "source",
        "left": null,
        "right": null
      },
      "isCompleted": false,
      "createdAt": "2024-07-23T07:47:58.001Z",
      "completedAt": null,
      "imageSrc": "/Icons/LifeSentence.svg"
    },
    "position": {
      "x": 261.0890610481651,
      "y": 536.197803983533
    },
    "type": "task",
    "measured": {
      "width": 84,
      "height": 84
    },
    "selected": false,
    "dragging": false,
    "width": 84,
    "height": 84,
    "resizing": false
  },
  {
    "id": "8",
    "data": {
      "name": "Prisoner",
      "description": "Debugging non stop for 3h!!!",
      "subtasks": [],
      "connections": {
        "up": "target",
        "down": "source",
        "left": "target",
        "right": "source"
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T07:45:56.419Z",
      "completedAt": "2024-07-23T22:56:05.630Z",
      "imageSrc": "/Icons/Prisoner.svg"
    },
    "position": {
      "x": 279.40891249594785,
      "y": 289.3357322970662
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "7",
    "data": {
      "name": "OP? OOP!!",
      "description": "Create a small application using Object-Oriented Programming.",
      "subtasks": [],
      "connections": {
        "up": null,
        "down": "source",
        "left": null,
        "right": null
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T07:39:20.078Z",
      "completedAt": "2024-07-23T22:54:12.555Z",
      "imageSrc": "/Icons/OOP.svg"
    },
    "position": {
      "x": 285.038241264147,
      "y": -69.12973178435362
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "6",
    "data": {
      "name": "Not Bad",
      "description": "Write your first bug and fix it!!!Not bad!",
      "subtasks": [],
      "connections": {
        "up": "target",
        "down": "source",
        "left": null,
        "right": null
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T07:38:36.692Z",
      "completedAt": "2024-07-23T22:55:13.197Z",
      "imageSrc": "/Icons/NotBad.svg"
    },
    "position": {
      "x": 180.4809350448876,
      "y": 99.80043536385962
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "5",
    "data": {
      "name": "Majestic Python",
      "description": "100000 lines! You sleep talk in python! Your mother tougue is python!",
      "subtasks": [],
      "connections": {
        "up": null,
        "down": "target",
        "left": null,
        "right": null
      },
      "isCompleted": false,
      "createdAt": "2024-07-23T07:35:38.304Z",
      "completedAt": null,
      "imageSrc": "/Icons/MajesticPython.svg"
    },
    "position": {
      "x": -258.83710543358745,
      "y": -21.385545279346054
    },
    "type": "task",
    "measured": {
      "width": 115,
      "height": 115
    },
    "selected": false,
    "dragging": false,
    "width": 115,
    "height": 115,
    "resizing": false
  },
  {
    "id": "4",
    "data": {
      "name": "Serpent",
      "description": "Write 100000 lines of python!!!",
      "subtasks": [],
      "connections": {
        "up": "source",
        "down": "source",
        "left": "source",
        "right": "target"
      },
      "isCompleted": false,
      "createdAt": "2024-07-23T07:34:07.990Z",
      "completedAt": null,
      "imageSrc": "/Icons/Serpent.svg"
    },
    "position": {
      "x": -306.8821846103523,
      "y": 204.36106608019804
    },
    "type": "task",
    "measured": {
      "width": 79,
      "height": 79
    },
    "selected": false,
    "dragging": false,
    "width": 79,
    "height": 79,
    "resizing": false
  },
  {
    "id": "3",
    "data": {
      "name": "Adolescent",
      "description": "Write first 10000 lines of python. You gained a bit confidence!",
      "subtasks": [],
      "connections": {
        "up": "target",
        "down": "source",
        "left": "source",
        "right": "source"
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T07:33:11.676Z",
      "completedAt": "2024-07-23T22:56:16.942Z",
      "imageSrc": "/Icons/Adolescent.svg"
    },
    "position": {
      "x": -13.559004083650056,
      "y": 220.74550647406636
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "2",
    "data": {
      "name": "Youngling",
      "description": "Write first 1000 lines of Python.",
      "subtasks": [],
      "connections": {
        "up": "target",
        "down": "source",
        "left": null,
        "right": null
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T07:31:50.875Z",
      "completedAt": "2024-07-23T22:55:02.990Z",
      "imageSrc": "/Icons/Youngling.svg"
    },
    "position": {
      "x": -63.38602486418485,
      "y": 58.85974551964461
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "1",
    "data": {
      "name": "Hatchling",
      "description": "Write First 100 lines of python.",
      "subtasks": [],
      "connections": {
        "up": null,
        "down": "source",
        "left": null,
        "right": null
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T07:31:13.027Z",
      "completedAt": "2024-07-23T22:54:19.756Z",
      "imageSrc": "/Icons/Hatchling.svg"
    },
    "position": {
      "x": 74.1086412125781,
      "y": -69.74022859533395
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  }
];

export const vocalNodes = [
  {
    "id": "15",
    "data": {
      "name": "Gear up!",
      "description": "Buy your first Microphone! Your neighbor is not gonna be happy about the purchase.",
      "subtasks": [],
      "connections": {
        "up": "source",
        "down": "target",
        "left": null,
        "right": null
      },
      "isCompleted": false,
      "createdAt": "2024-07-23T09:45:17.392Z",
      "completedAt": null,
      "imageSrc": "/Icons/Gearup.svg"
    },
    "position": {
      "x": 108.81291176925343,
      "y": -593.7146665096252
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "14",
    "data": {
      "name": "Judge Me!",
      "description": "Participate in an audition!",
      "subtasks": [],
      "connections": {
        "up": "source",
        "down": "target",
        "left": null,
        "right": null
      },
      "isCompleted": false,
      "createdAt": "2024-07-23T09:44:04.406Z",
      "completedAt": null,
      "imageSrc": "/Icons/JudgeMe.svg"
    },
    "position": {
      "x": -253.01198200121598,
      "y": -450.4768956880146
    },
    "type": "task",
    "measured": {
      "width": 91,
      "height": 91
    },
    "selected": false,
    "dragging": false,
    "resizing": false,
    "width": 91,
    "height": 91
  },
  {
    "id": "13",
    "data": {
      "name": "Mic Hog",
      "description": "Master 20 songs/ add them to your karaoke list.",
      "subtasks": [],
      "connections": {
        "up": "source",
        "down": "target",
        "left": null,
        "right": null
      },
      "isCompleted": false,
      "createdAt": "2024-07-23T09:43:13.325Z",
      "completedAt": null,
      "imageSrc": "/Icons/MicHog.svg"
    },
    "position": {
      "x": 247.88212086910198,
      "y": -456.5041201814667
    },
    "type": "task",
    "measured": {
      "width": 80,
      "height": 80
    },
    "selected": false,
    "dragging": false,
    "width": 80,
    "height": 80,
    "resizing": false
  },
  {
    "id": "12",
    "data": {
      "name": "Literate",
      "description": "Finally learned to read score properly.",
      "subtasks": [],
      "connections": {
        "up": "source",
        "down": "target",
        "left": null,
        "right": null
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T09:41:21.442Z",
      "completedAt": "2024-07-23T23:19:53.473Z",
      "imageSrc": "/Icons/Literate.svg"
    },
    "position": {
      "x": 377.35421949312155,
      "y": -317.9522194055253
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": true,
    "dragging": false
  },
  {
    "id": "11",
    "data": {
      "name": "Villain",
      "description": "Be Bass means you are a villain. Master 3 villain songs from musical/movie.",
      "subtasks": [],
      "connections": {
        "up": "source",
        "down": "target",
        "left": null,
        "right": null
      },
      "isCompleted": false,
      "createdAt": "2024-07-23T09:38:54.174Z",
      "completedAt": null,
      "imageSrc": "/Icons/Villain.svg"
    },
    "position": {
      "x": 96.20112569735583,
      "y": -321.3994975803535
    },
    "type": "task",
    "measured": {
      "width": 71,
      "height": 71
    },
    "selected": false,
    "dragging": false,
    "width": 71,
    "height": 71,
    "resizing": false
  },
  {
    "id": "10",
    "data": {
      "name": "Certified Bass",
      "description": "You know what? You are a bass.",
      "subtasks": [],
      "connections": {
        "up": "source",
        "down": "target",
        "left": null,
        "right": "source"
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T09:36:00.963Z",
      "completedAt": "2024-07-23T23:19:04.583Z",
      "imageSrc": "/Icons/CertifiedBass.svg"
    },
    "position": {
      "x": -53.22741574808511,
      "y": -240.48188916872456
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "9",
    "data": {
      "name": "A Windfall",
      "description": "Deadlift 200lbs with the same supporting technique you learned from singing.",
      "subtasks": [],
      "connections": {
        "up": null,
        "down": null,
        "left": null,
        "right": "target"
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T09:32:34.350Z",
      "completedAt": "2024-07-23T23:19:22.376Z",
      "imageSrc": "/Icons/AWindfall.svg"
    },
    "position": {
      "x": -321.16824550217194,
      "y": -115.34254755183261
    },
    "type": "task",
    "measured": {
      "width": 87,
      "height": 87
    },
    "selected": false,
    "dragging": false,
    "width": 87,
    "height": 87,
    "resizing": false
  },
  {
    "id": "8",
    "data": {
      "name": "Training Wheel",
      "description": "No more backtrack my friend, face your hedious voice! Be confidently wrong with the notes!",
      "subtasks": [],
      "connections": {
        "up": "source",
        "down": "target",
        "left": "source",
        "right": null
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T09:30:49.198Z",
      "completedAt": "2024-07-23T23:18:58.463Z",
      "imageSrc": "/Icons/TrainingWheel.svg"
    },
    "position": {
      "x": -133.95053349918092,
      "y": -136.94760923731582
    },
    "type": "task",
    "measured": {
      "width": 48,
      "height": 48
    },
    "selected": false,
    "dragging": false,
    "width": 48,
    "height": 48,
    "resizing": false
  },
  {
    "id": "7",
    "data": {
      "name": "Open Tube",
      "description": "Turns out you never supported the right way.",
      "subtasks": [],
      "connections": {
        "up": "source",
        "down": "target",
        "left": null,
        "right": null
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T09:28:20.320Z",
      "completedAt": "2024-07-23T23:18:51.966Z",
      "imageSrc": "/Icons/OpenTube.svg"
    },
    "position": {
      "x": -182.19415512988667,
      "y": -11.481735071912494
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "6",
    "data": {
      "name": "Narcissist",
      "description": "I don't sing while in the shower. I perform. Sing in shower for a month straight.",
      "subtasks": [],
      "connections": {
        "up": "source",
        "down": "target",
        "left": null,
        "right": null
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T09:27:22.815Z",
      "completedAt": "2024-07-23T23:19:47.056Z",
      "imageSrc": "/Icons/Narcissist.svg"
    },
    "position": {
      "x": 259.86574098662686,
      "y": -91.72491288392752
    },
    "type": "task",
    "measured": {
      "width": 83,
      "height": 83
    },
    "selected": false,
    "dragging": false,
    "width": 83,
    "height": 83,
    "resizing": false
  },
  {
    "id": "5",
    "data": {
      "name": "Thats What I do",
      "description": "Sing everyday for 2 months",
      "subtasks": [],
      "connections": {
        "up": "source",
        "down": "target",
        "left": null,
        "right": null
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T09:24:26.803Z",
      "completedAt": "2024-07-23T23:19:13.552Z",
      "imageSrc": "/Icons/ThatsWhatIdo.svg"
    },
    "position": {
      "x": 9.660936464576732,
      "y": -50.375422487180856
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "4",
    "data": {
      "name": "Quiet Hour",
      "description": "Let your hospitable neighbor kindly remind you when the quiet hour is.",
      "subtasks": [],
      "connections": {
        "up": "source",
        "down": "target",
        "left": null,
        "right": null
      },
      "isCompleted": false,
      "createdAt": "2024-07-23T09:23:43.731Z",
      "completedAt": null,
      "imageSrc": "/Icons/QuietHour.svg"
    },
    "position": {
      "x": 132.47897390655535,
      "y": -64.83647956807985
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "3",
    "data": {
      "name": "10 Days Straight",
      "description": "Been singin for 10 days",
      "subtasks": [],
      "connections": {
        "up": "source",
        "down": "target",
        "left": null,
        "right": null
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T09:22:49.072Z",
      "completedAt": "2024-07-23T23:18:39.510Z",
      "imageSrc": "/Icons/10DaysStraight.svg"
    },
    "position": {
      "x": 132.35689638452044,
      "y": 91.47962573488245
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "2",
    "data": {
      "name": "ENMMMMM",
      "description": "Yes, yes, you learned to use support like you havent eaten fiber in days!",
      "subtasks": [],
      "connections": {
        "up": "source",
        "down": "target",
        "left": null,
        "right": null
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T09:21:24.335Z",
      "completedAt": "2024-07-23T23:18:46.310Z",
      "imageSrc": "/Icons/ENMMMMM.svg"
    },
    "position": {
      "x": -97.385548376626,
      "y": 89.15719341283268
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "1",
    "data": {
      "name": "Stray Cat",
      "description": "Congrats! You are not tone deaf but sounds like a stray cat.",
      "subtasks": [],
      "connections": {
        "up": "source",
        "down": null,
        "left": null,
        "right": null
      },
      "isCompleted": true,
      "createdAt": "2024-07-23T09:19:59.719Z",
      "completedAt": "2024-07-23T23:18:31.279Z",
      "imageSrc": "/Icons/StrayCat.svg"
    },
    "position": {
      "x": 11.393123151355567,
      "y": 231.81386636021023
    },
    "type": "task",
    "measured": {
      "width": 46,
      "height": 46
    },
    "selected": false,
    "dragging": false
  }
];

export const fitnessNodes = [
  {
    id: "16",
    data: {
      name: "Jupiter!",
      description: "Add 20lbs weighted pull up 5 rep max.",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T10:33:10.448Z",
      completedAt: null,
      imageSrc: "/Icons/Jupiter.svg",
    },
    position: {
      x: 422.8249849040926,
      y: -547.4502729497549,
    },
    type: "task",
    measured: {
      width: 73,
      height: 73,
    },
    selected: false,
    dragging: false,
    width: 73,
    height: 73,
    resizing: false,
  },
  {
    id: "15",
    data: {
      name: "Back Arc",
      description: "1st pull up.",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T10:31:48.359Z",
      completedAt: null,
      imageSrc: "/Icons/BackArc.svg",
    },
    position: {
      x: 312.45509026370803,
      y: -257.849948323896,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "14",
    data: {
      name: "Not enough Gravity!",
      description: "First weighted pull up",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T10:30:59.069Z",
      completedAt: null,
      imageSrc: "/Icons/NotenoughGravity.svg",
    },
    position: {
      x: 311.64389613959435,
      y: -410.2567441680875,
    },
    type: "task",
    measured: {
      width: 47,
      height: 47,
    },
    selected: false,
    dragging: false,
    width: 47,
    height: 47,
    resizing: false,
  },
  {
    id: "13",
    data: {
      name: "Investor",
      description: "Keep track of calories for over 16 months.",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T10:30:14.628Z",
      completedAt: null,
      imageSrc: "/Icons/Investor.svg",
    },
    position: {
      x: -157.67844286167946,
      y: -475.47756080664465,
    },
    type: "task",
    measured: {
      width: 75,
      height: 75,
    },
    selected: false,
    dragging: false,
    width: 75,
    height: 75,
    resizing: false,
  },
  {
    id: "12",
    data: {
      name: "Strategist",
      description: "Keep track of calories for more than 2 months.",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T10:29:26.371Z",
      completedAt: null,
      imageSrc: "/Icons/Strategist.svg",
    },
    position: {
      x: -143.52603933493492,
      y: -316.17210096313573,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "11",
    data: {
      name: "Orc",
      description: "Bench 250lbs 3rep max.",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T10:28:40.074Z",
      completedAt: null,
      imageSrc: "/Icons/Orc.svg",
    },
    position: {
      x: 135.98633989111576,
      y: -472.0773779351249,
    },
    type: "task",
    measured: {
      width: 83,
      height: 83,
    },
    selected: false,
    dragging: false,
    width: 83,
    height: 83,
    resizing: false,
  },
  {
    id: "10",
    data: {
      name: "Bugbear",
      description: "Bench 200 lbs 5 rm",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T10:27:57.850Z",
      completedAt: null,
      imageSrc: "/Icons/Bugbear.svg",
    },
    position: {
      x: 148.2536330322404,
      y: -280.4081461805897,
    },
    type: "task",
    measured: {
      width: 58,
      height: 58,
    },
    selected: false,
    dragging: false,
    width: 58,
    height: 58,
    resizing: false,
  },
  {
    id: "9",
    data: {
      name: "Hobgoblin",
      description: "bench 150lbs 6rm.",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: "source",
        right: "source",
      },
      isCompleted: false,
      createdAt: "2024-07-23T10:27:09.472Z",
      completedAt: null,
      imageSrc: "/Icons/Hobgoblin.svg",
    },
    position: {
      x: 154.83319649245314,
      y: -115.55380109422492,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "8",
    data: {
      name: "Alliance",
      description: "Find a gym bro.",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: "target",
      },
      isCompleted: false,
      createdAt: "2024-07-23T10:25:09.877Z",
      completedAt: null,
      imageSrc: "/Icons/Alliance.svg",
    },
    position: {
      x: 311.4352679016126,
      y: -52.17603238893932,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "7",
    data: {
      name: "Goblin",
      description: "Bench 100 lbs 4 set 6 reps.",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: "source",
        right: "source",
      },
      isCompleted: false,
      createdAt: "2024-07-23T10:24:26.469Z",
      completedAt: null,
      imageSrc: "/Icons/Goblin.svg",
    },
    position: {
      x: 154.98861305791903,
      y: 32.44686116285914,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "6",
    data: {
      name: "Quant",
      description: "Maintain strict 200 cal surplus for a week!",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T10:23:16.275Z",
      completedAt: null,
      imageSrc: "/Icons/Quant.svg",
    },
    position: {
      x: -144.4855186110545,
      y: -173.2341856751833,
    },
    type: "task",
    measured: {
      width: 47,
      height: 47,
    },
    selected: false,
    dragging: false,
    width: 47,
    height: 47,
    resizing: false,
  },
  {
    id: "5",
    data: {
      name: "Satori",
      description: "Figured out your base calorie consumption.",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T10:22:50.242Z",
      completedAt: null,
      imageSrc: "/Icons/Satori.svg",
    },
    position: {
      x: -216.75703250486387,
      y: -25.443366634764953,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "4",
    data: {
      name: "Scientist",
      description: "Keep track your calories for a week.",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T10:21:14.472Z",
      completedAt: null,
      imageSrc: "/Icons/Scientist.svg",
    },
    position: {
      x: -23.86537189034639,
      y: -68.84423285517323,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "3",
    data: {
      name: "Novice Nutritionist",
      description: "Listen to them gurus, and eat Mediterranean.",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: "source",
        right: "source",
      },
      isCompleted: false,
      createdAt: "2024-07-23T10:20:43.672Z",
      completedAt: null,
      imageSrc: "/Icons/NoviceNutritionist.svg",
    },
    position: {
      x: -94.53284772195579,
      y: 30.6261316492282,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "2",
    data: {
      name: "Bare Bone",
      description: "Find a basic plan and start training for a month.",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T10:18:34.661Z",
      completedAt: null,
      imageSrc: "/Icons/BareBone.svg",
    },
    position: {
      x: 55.7049182826738,
      y: 175.38542764854353,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
  {
    id: "1",
    data: {
      name: "Beginner's Streak",
      description: "Show up to any gym for 10 days.\n",
      subtasks: [],
      connections: {
        up: "source",
        down: "target",
        left: null,
        right: null,
      },
      isCompleted: false,
      createdAt: "2024-07-23T10:17:30.229Z",
      completedAt: null,
      imageSrc: "/Icons/10DaysStraight.svg",
    },
    position: {
      x: 55.76893365348802,
      y: 292.1824068914026,
    },
    type: "task",
    measured: {
      width: 46,
      height: 46,
    },
    selected: false,
    dragging: false,
  },
];
