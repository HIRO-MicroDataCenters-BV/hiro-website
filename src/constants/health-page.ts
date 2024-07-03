import { cubeParts } from '@/constants/cube-parts';
import type { Edge, Node } from '@vue-flow/core';
import { Position } from '@vue-flow/core';

export const healthCards = [
  {
    title: 'Cognitive Engine',
    description:
      'Sustainability and efficiency of living and working spaces,' +
      ' supportive infrastructures of water, energy, transportation,' +
      ' public services such as waste disposal, ' +
      'managing air quality and security will be AI driven.' +
      ' To safeguard the citizen from cybercrime and guarantee ' +
      'safe and efficient services, the deployed AI models need ' +
      'to be assessed on trustworthiness, transparency, ' +
      'accuracy and could potentially be benchmarked against their competitors.',
    type: cubeParts.cognitiveEngine,
  },
  {
    title: 'Data Spaces',
    description:
      'Patient data and personalised treatments for ' +
      'specific diseases will be shared across ' +
      'privacy preserving data spaces to enable ' +
      'research and accelerate the training of ' +
      'AI used for medical decision making.',
    type: cubeParts.dataSpaces,
  },
  {
    title: 'Edge Cloud Services',
    description:
      'Hospitals, medical centers and research require ' +
      'long term privacy preserving storage of data on premise. ' +
      'With the increase of medical AI/ML this data becomes ' +
      'a valuable source for research and personalised treatment. ' +
      'A modern on-premise edge cloud provides ' +
      'in a scalable and cost efficient way the ' +
      'services to develop applications and train AI models.',
    type: cubeParts.edgeCloudServices,
  },
  {
    title: 'Edge Micro Data Centers',
    description:
      'A finegrained infrastructure of small datacenters provide ' +
      'local powerful processing of data and AI during operations, ' +
      'treatments and while monitoring patients. ' +
      'EMDC’s can be customized to offer unprecedented ' +
      'local data storage, AI training, ' +
      'AI inferencing and will carry some of the latest XPU’s including Risc-V.',
    type: cubeParts.edgeMicroDataCenters,
  },
];

export const healthGraph = {
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
      position: { x: 200, y: 100 },
      sourcePosition: Position.Right,
      targetPosition: Position.Bottom,
      class: 'vue-flow__node--ecs',
    },
    {
      id: '4',
      position: { x: 150, y: 20 },
      targetPosition: Position.Bottom,
      class: 'vue-flow__node--ecs-gov',
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
