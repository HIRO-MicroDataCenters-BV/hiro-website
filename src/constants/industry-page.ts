import { cubeParts } from '@/constants/cube-parts';

const industryCards = [
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
];
