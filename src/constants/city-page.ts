import { cubeParts } from '@/constants/cube-parts';
import type { Edge, Node } from '@vue-flow/core';

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
];

export const cityGraph = {
  nodes: <Node[]>[],
  edges: <Edge[]>[],
};
