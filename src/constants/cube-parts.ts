import CognitiveEngineIcon from '@/assets/cube-parts/cognitive-engine.svg?skipsvgo';
import DataSpacesIcon from '@/assets/cube-parts/data-space.svg?skipsvgo';
import EdgeCloudServicesIcon from '@/assets/cube-parts/edge-cloud-services.svg?skipsvgo';
import GovernanceIcon from '@/assets/cube-parts/governance.svg?skipsvgo';
import EdgeMicroDataCentersIcon from '@/assets/cubes/empty.svg';

export const cubeParts = {
  cognitiveEngine: 'cognitive-engine',
  dataSpaces: 'data-spaces',
  edgeCloudServices: 'edge-cloud-services',
  governance: 'governance',
  edgeMicroDataCenters: 'edge-micro-data-centers',
};

export const cubePartsIcons = {
  [cubeParts.cognitiveEngine]: CognitiveEngineIcon,
  [cubeParts.dataSpaces]: DataSpacesIcon,
  [cubeParts.edgeCloudServices]: EdgeCloudServicesIcon,
  [cubeParts.governance]: GovernanceIcon,
  [cubeParts.edgeMicroDataCenters]: EdgeMicroDataCentersIcon,
};
