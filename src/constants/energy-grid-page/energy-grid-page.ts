import { cubeParts } from '@/constants/cube-parts';
import type { Edge, Node } from '@vue-flow/core';
import { Position } from '@vue-flow/core';

import { energyGridVideos } from '@/constants/energy-grid-page/energy-grid-videos';

export const energyGridCards = [
  {
    title: 'Edge Cloud Services',
    description:
      'run local applications that enhance ' +
      'Manufacturing Execution Systems (MES) ' +
      'with data capture, analytics and AI/ML inferencing. ' +
      'This powerful computing capacity runs applications ' +
      'such as complex manufacturing processes, automation, ' +
      'predictive maintenance, real time decision making ' +
      'to minimize downtime, reduce costs, ' +
      'enhance product consistency and customer satisfaction.',
    type: cubeParts.edgeCloudServices,
  },
  {
    title: 'Edge Micro Data Centers',
    description:
      'are customized to specific usecase throughout the factory floor, ' +
      'from AI training, to data storage, inferencing, real time analytics, etc. ' +
      'EMDC’s replace the centralised and single point of failure of ' +
      'a server room and places the big data and AI/ML processing ' +
      'on the factory floor without the need of ' +
      'supportive infrastructure such as cooling, access control.',
    type: cubeParts.edgeMicroDataCenters,
  },
  {
    title: 'Data Spaces',
    description:
      'Availability of data across enterprise disciplines' +
      ' and the complete value and supply chain. ' +
      'Data Spaces allows enhanced data integration ' +
      'of various data including machines, sensors, ' +
      'and systems across the manufacturing floor and ' +
      'the wider supply chain. This integration enables ' +
      'a holistic view of operations, ' +
      'security and governance that ' +
      'allows more informed decision-making processes.',
    type: cubeParts.dataSpaces,
  },
  {
    title: 'Cognitive Engine',
    description:
      'AI/ML model consistency and governance are critical to ' +
      'ensuring that the deployment of these technologies leads ' +
      'to reliable, repeatable, and responsible outcomes. ' +
      'It supports the scalability by managing retraining ' +
      'of single models and the accuracy of ' +
      'applications relying on multiple models.',
    type: cubeParts.cognitiveEngine,
  },
] as const;

export const energyGridGraph = {
  nodes: <Node[]>[
    {
      id: '1',
      position: { x: 25, y: 5 },
      targetPosition: Position.Bottom,
      class: 'vue-flow__node--ecs-ds',
    },
    {
      id: '2',
      position: { x: 10, y: 200 },
      class: 'vue-flow__node--ecs-ds-cog-gov',
    },
    {
      id: '3',
      position: { x: 200, y: 250 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Left,
      class: 'vue-flow__node--ecs',
    },
    {
      id: '4',
      position: { x: 200, y: 75 },
      targetPosition: Position.Left,
      class: 'vue-flow__node--ecs-gov',
    },
    {
      id: '5',
      position: { x: 80, y: 0 },
      type: 'video',
      data: {
        videoFile: energyGridVideos.energyGrid1.videoFile,
        videoFullFileUrl: energyGridVideos.energyGrid1.videoFullFileUrl,
      },
    },
    {
      id: '6',
      position: { x: 80, y: 140 },
      type: 'video',
      data: {
        videoFile: energyGridVideos.energyGrid2.videoFile,
        videoFullFileUrl: energyGridVideos.energyGrid2.videoFullFileUrl,
        width: 150,
      },
    },
    {
      id: '7',
      position: { x: 0, y: 280 },
      type: 'video',
      data: {
        videoFile: energyGridVideos.energyGrid3.videoFile,
        videoFullFileUrl: energyGridVideos.energyGrid3.videoFullFileUrl,
      },
    },
    {
      id: '8',
      position: { x: 250, y: 200 },
      type: 'video',
      data: {
        videoFile: energyGridVideos.energyGrid4.videoFile,
        videoFullFileUrl: energyGridVideos.energyGrid4.videoFullFileUrl,
        width: 100,
      },
    },
    {
      id: '9',
      position: { x: 260, y: 40 },
      type: 'video',
      data: {
        videoFile: energyGridVideos.energyGrid5.videoFile,
        videoFullFileUrl: energyGridVideos.energyGrid5.videoFullFileUrl,
      },
    },
    {
      id: '10',
      position: { x: -85, y: 100 },
      type: 'video',
      data: {
        videoFile: energyGridVideos.energyGrid6.videoFile,
        videoFullFileUrl: energyGridVideos.energyGrid6.videoFullFileUrl,
      },
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
      id: 'e3->1',
      source: '3',
      target: '1',
      animated: true,
      type: 'straight',
    },
  ],
};
