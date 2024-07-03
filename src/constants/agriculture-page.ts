import { cubeParts } from '@/constants/cube-parts';
import { type Edge, type Node, Position } from '@vue-flow/core';

export const agricultureCards = [
  {
    title: 'Edge Cloud Services',
    description:
      'Run local applications that enhance Manufacturing Execution ' +
      'Systems (MES) with data capture, analytics and ' +
      'AI/ML inferencing. This powerful computing capacity ' +
      'runs applications such as complex manufacturing processes, ' +
      'automation, predictive maintenance, real time decision making ' +
      'to minimize downtime, reduce costs, enhance product consistency ' +
      'and customer satisfaction.',
    type: cubeParts.edgeCloudServices,
  },
  {
    title: 'Cognitive Engine',
    description:
      'Manages and ensures reliability of AI/ ML models ' +
      'integrated across the farming process, ' +
      'from planting to harvesting to market distribution. ' +
      'Large buyers, corporates representing farmers invest ' +
      'in the support AI/ML initiatives and recommend the use ' +
      'of cognitive engines ensuring that all parties benefit ' +
      'from the most advanced and efficient AI/ML.',
    type: cubeParts.cognitiveEngine,
  },
  {
    title: 'Data Spaces',
    description:
      'Are the integrated environments where data from different ' +
      'sources is aggregated, managed, and made accessible ' +
      'to various stakeholders. Availability of data across ' +
      'the complete supply chain allows real time optimization and forecasting.',
    type: cubeParts.dataSpaces,
  },
  {
    title: 'Edge Micro Data Centers',
    description:
      'Local big data and AI processing, sensor analytics, ' +
      'data storage and aggregation can be performed across ' +
      'a uniform hardware platform. The platform can be customized ' +
      'to local usage and cooperatives can buy infrastructure ' +
      'at volume for their members. The low-to-no maintenance ' +
      'and powerful edge-as-a-service ensures that lo local ' +
      'IT knowledge is needed to maintain the infrastructure.',
    type: cubeParts.edgeMicroDataCenters,
  },
];

export const agricultureGraph = {
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
      position: { x: 150, y: 75 },
      targetPosition: Position.Left,
      class: 'vue-flow__node--ecs-gov',
    },
    {
      id: '4',
      position: { x: 150, y: 200 },
      targetPosition: Position.Bottom,
      class: 'vue-flow__node--ecs-ds-cog',
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
  ],
};
