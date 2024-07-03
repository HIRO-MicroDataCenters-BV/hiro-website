import { cubeParts } from '@/constants/cube-parts';
import { type Edge, type Node, Position } from '@vue-flow/core';

export const servicesCards = [
  {
    title: 'Edge Cloud Services',
    description:
      'Allows applications and platforms to locally perform latency and ' +
      'resilient local big data processing and AI/ML inferencing close ' +
      'to data producer and consumer. The workloads deployment across ' +
      'the local infrastructure is optimized by built in intelligence ' +
      'and stretches flexibly into any off-premise cloud service provider.',
    type: cubeParts.edgeCloudServices,
  },
  {
    title: 'Data Spaces',
    description:
      'Are the governed marketplaces for data exploitation within and outside' +
      ' the enterprise and offers low threshold scalability and ' +
      'flexibility for data exploitation without disrupting ' +
      'existing data ecosystems. The define the reliable ' +
      'interfaces between disciplines, ' +
      'departments and enterprises for data driven collaborations.',
    type: cubeParts.dataSpaces,
  },
  {
    title: 'Cognitive Engine',
    description:
      'Has a set of tools for AI ops to manage AI/Ml models and their deployment' +
      ' across the enterprise. Training, retraining, tuning and serving AI/ML' +
      ' models in a cost and performance optimized manner.' +
      ' Including a growing set of tools to manage accuracy, ' +
      'drift (in data and model), explainability,' +
      ' application KPI performance, risks and fairness.',
    type: cubeParts.cognitiveEngine,
  },
  {
    title: 'Edge Micro Data Centers',
    description:
      'Local big data and AI processing, sensor analytics, data storage ' +
      'and aggregation can be performed across a uniform hardware platform. ' +
      'The platform can be customized to local usage and cooperatives can ' +
      'buy infrastructure at volume for their members. The low-to-no maintenance ' +
      'and powerful edge-as-a-service ensures that lo local IT knowledge ' +
      'is needed to maintain the infrastructure.',
    type: cubeParts.edgeMicroDataCenters,
  },
  {
    title: 'Governance',
    description:
      'Ensures that the data and AI/ML models are used in a responsible ' +
      'and ethical manner. The governance ensures that the data is ' +
      'secure, the AI/ML models are accurate, transparent and ' +
      'can be benchmarked against their competitors.',
    type: cubeParts.governance,
  },
];

export const servicesGraph = {
  nodes: <Node[]>[
    {
      id: '1',
      position: { x: 5, y: 5 },
      class: 'vue-flow__node--ecs-ds',
    },
    {
      id: '2',
      position: { x: 10, y: 150 },
      class: 'vue-flow__node--ecs-ds-cog-gov',
    },
    {
      id: '3',
      position: { x: 15, y: 300 },
      sourcePosition: Position.Right,
      class: 'vue-flow__node--ecs',
    },
    {
      id: '4',
      position: { x: 150, y: 75 },
      targetPosition: Position.Left,
      class: 'vue-flow__node--ecs-gov',
    },
    {
      id: '5',
      position: { x: 150, y: 200 },
      targetPosition: Position.Left,
      class: 'vue-flow__node--ecs-ds-cog',
    },
    {
      id: '6',
      position: { x: 250, y: 150 },
      targetPosition: Position.Left,
      class: 'vue-flow__node--ecs-ds-gov',
    },
  ],
  edges: <Edge[]>[
    {
      id: 'e1->2',
      source: '1',
      target: '2',
      animated: true,
      type: 'straight',
    },
    {
      id: 'e2->3',
      source: '2',
      target: '3',
      animated: true,
      type: 'straight',
    },
    {
      id: 'e2->4',
      source: '2',
      target: '4',
      animated: true,
      type: 'straight',
    },
    {
      id: 'e1->4',
      source: '1',
      target: '4',
      animated: true,
      type: 'straight',
    },
    {
      id: 'e3->5',
      source: '3',
      target: '5',
      animated: true,
      type: 'straight',
    },
    {
      id: 'e4->6',
      source: '4',
      target: '6',
      animated: true,
      type: 'straight',
    },
    {
      id: 'e5->6',
      source: '5',
      target: '6',
      animated: true,
      type: 'straight',
    },
  ],
};
