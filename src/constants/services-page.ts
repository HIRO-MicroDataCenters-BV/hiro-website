import { cubeParts } from '@/constants/cube-parts';

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
