import { cubeParts } from '@/constants/cube-parts';
import type { Edge, Node } from '@vue-flow/core';
import { Position } from '@vue-flow/core';

import { cityVideos } from '@/constants/city-page/city-videos';

export const cityCards = [
  {
    title: 'Data Spaces',
    description:
      'The social structures in City 2.0, work or leisure,' +
      ' will be data driven. Dataspaces will bring ' +
      'together stakeholders with a shared interest of ' +
      'sharing data and AI models in a securely governed virtual market place.',
    type: cubeParts.dataSpaces,
  },
  {
    title: 'Cognitive Engine',
    description:
      'Sustainability and efficiency of living and working spaces,' +
      ' supportive infrastructures of water, energy, transportation,' +
      ' public services such as waste disposal, managing air quality and ' +
      'security will be AI driven. To safeguard the citizen from cybercrime ' +
      'and guarantee safe and efficient services, the deployed AI models ' +
      'need to be assessed on trustworthiness, transparency, accuracy ' +
      'and could potentially be benchmarked against their competitors.',
    type: cubeParts.cognitiveEngine,
  },
  {
    title: 'Edge Micro Data Centers',
    description:
      'Edge-cloud infrastructure in the city 2.0 can easily scale one ' +
      'usecase at a time. Small EMDC’s installed ' +
      'locally and customized to purpose can over ' +
      'time scale into a large grid of distributed ' +
      'EMDC’s across the city, sharing their computing ' +
      'capacity when needed and/ or function as private ' +
      '5G MEC infrastructure. EMDC’s are small enough ' +
      'to be integrated in the local energy and heat micro grids.',
    type: cubeParts.edgeMicroDataCenters,
  },
  {
    title: 'Edge Cloud Services',
    description:
      'The sensors and devices in CITY 2.0 will produce and handle ' +
      'large volumes of privacy sensitive data. ' +
      'Edge-cloud services capable of processing ' +
      'large volumes of data and AI, will be the ' +
      'first hop from sensors and devices to the web. ' +
      'These services can be low latency, resilient and ' +
      'safeguard data and AI processing according ' +
      'to European values of data privacy, ' +
      'data sovereignty, AI transparency, etc.',
    type: cubeParts.edgeCloudServices,
  },
] as const;

export const cityGraph = {
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
      targetPosition: Position.Bottom,
      class: 'vue-flow__node--ecs-ds-cog',
    },
    {
      id: '6',
      position: { x: -120, y: 0 },
      type: 'video',
      data: {
        videoFile: cityVideos.city1.videoFile,
        videoFullFileUrl: cityVideos.city1.videoFullFileUrl,
      },
    },
    {
      id: '7',
      position: { x: -140, y: 140 },
      type: 'video',
      data: {
        videoFile: cityVideos.city2.videoFile,
        videoFullFileUrl: cityVideos.city2.videoFullFileUrl,
        width: 140,
      },
    },
    {
      id: '8',
      position: { x: -120, y: 280 },
      type: 'video',
      data: {
        videoFile: cityVideos.city3.videoFile,
        videoFullFileUrl: cityVideos.city3.videoFullFileUrl,
      },
    },
    {
      id: '9',
      position: { x: 120, y: 270 },
      type: 'video',
      data: {
        videoFile: cityVideos.city4.videoFile,
        videoFullFileUrl: cityVideos.city4.videoFullFileUrl,
        width: 150,
      },
    },
    {
      id: '10',
      position: { x: 150, y: 0 },
      type: 'video',
      data: {
        videoFile: cityVideos.city5.videoFile,
        videoFullFileUrl: cityVideos.city5.videoFullFileUrl,
        width: 130,
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
    {
      id: 'e4->5',
      source: '4',
      target: '5',
      animated: true,
      type: 'straight',
    },
  ],
} as const;
