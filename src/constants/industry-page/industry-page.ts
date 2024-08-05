import { cubeParts } from '@/constants/cube-parts';
import type { Edge, Node } from '@vue-flow/core';
import { Position } from '@vue-flow/core';

import { industryVideos } from '@/constants/industry-page/industry-videos';

export const industryCards = [
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
    title: 'Edge Micro Data Centers',
    description:
      'Are customized to specific usecase throughout the factory floor, ' +
      'from AI training, to data storage, inferencing, real time analytics, etc.' +
      ' EMDC’s replace the centralised and single point of failure of ' +
      'a server room and places the big data and AI/ML processing ' +
      'on the factory floor without the need of ' +
      'supportive infrastructure such as cooling, access control.',
    type: cubeParts.edgeMicroDataCenters,
  },
  {
    title: 'Data Spaces',
    description:
      'Availability of data across enterprise disciplines and the complete' +
      ' value and supply chain. Data Spaces allows enhanced data integration' +
      ' of various data including machines, sensors, and systems across ' +
      'the manufacturing floor and the wider supply chain. ' +
      'This integration enables a holistic view of operations, ' +
      'security and governance that allows ' +
      'more informed decision-making processes.',
    type: cubeParts.dataSpaces,
  },
  {
    title: 'Cognitive Engine',
    description:
      'AI/ML model consistency and governance are critical to ' +
      'ensuring that the deployment of these technologies leads to reliable, ' +
      'repeatable, and responsible outcomes. ' +
      'It supports the scalability by managing retraining ' +
      'of single models and the accuracy of ' +
      'applications relying on multiple models.',
    type: cubeParts.cognitiveEngine,
  },
] as const;

export const industryGraph = {
  nodes: <Node[]>[
    {
      id: '1',
      position: { x: 5, y: 5 },
      class: 'vue-flow__node--ecs-ds',
    },
    {
      id: '2',
      position: { x: 50, y: 125 },
      class: 'vue-flow__node--ecs-ds-cog-gov',
    },
    {
      id: '3',
      position: { x: 15, y: 250 },
      sourcePosition: Position.Right,
      targetPosition: Position.Bottom,
      class: 'vue-flow__node--ecs',
    },
    {
      id: '4',
      position: { x: 200, y: 50 },
      targetPosition: Position.Bottom,
      class: 'vue-flow__node--ecs-gov',
    },
    {
      id: '5',
      position: { x: 220, y: 220 },
      targetPosition: Position.Left,
      class: 'vue-flow__node--ecs-ds',
    },
    {
      id: '6',
      position: { x: 60, y: 0 },
      type: 'video',
      data: {
        videoFullFileUrl: industryVideos.industry1.videoFullFileUrl,
        videoFile: industryVideos.industry1.videoFile,
      },
    },
    {
      id: '7',
      position: { x: 255, y: 15 },
      type: 'video',
      data: {
        videoFullFileUrl: industryVideos.industry2.videoFullFileUrl,
        videoFile: industryVideos.industry2.videoFile,
      },
    },
    {
      id: '8',
      position: { x: 250, y: 280 },
      type: 'video',
      data: {
        videoFullFileUrl: industryVideos.industry3.videoFullFileUrl,
        videoFile: industryVideos.industry3.videoFile,
      },
    },
    {
      id: '9',
      position: { x: 130, y: 120 },
      type: 'video',
      data: {
        videoFullFileUrl: industryVideos.industry4.videoFullFileUrl,
        videoFile: industryVideos.industry4.videoFile,
        width: 160,
      },
    },
    {
      id: '10',
      position: { x: 20, y: 310 },
      type: 'video',
      data: {
        videoFullFileUrl: industryVideos.industry5.videoFullFileUrl,
        videoFile: industryVideos.industry5.videoFile,
        width: 140,
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
      id: 'e3->5',
      source: '3',
      target: '5',
      animated: true,
      type: 'straight',
    },
  ],
} as const;
