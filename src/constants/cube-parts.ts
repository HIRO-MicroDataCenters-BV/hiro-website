import CognitiveEngineIcon from '@/assets/cube-parts/cognitive-engine.svg?skipsvgo';
import DataSpacesIcon from '@/assets/cube-parts/data-space.svg?skipsvgo';
import EdgeCloudServicesIcon from '@/assets/cube-parts/edge-cloud-services.svg?skipsvgo';
import GovernanceIcon from '@/assets/cube-parts/governance.svg?skipsvgo';
import EdgeMicroDataCentersIcon from '@/assets/cubes/empty.svg';

import CognitiveEngineLink from '@/assets/cube-parts/cognitive-engine.svg?url';
import DataSpacesLink from '@/assets/cube-parts/data-space.svg?url';
import EdgeCloudServicesLink from '@/assets/cube-parts/edge-cloud-services.svg?url';
import GovernanceLink from '@/assets/cube-parts/governance.svg?url';
import EdgeMicroDataCentersLink from '@/assets/cubes/empty.svg?url';

import AgricultureIcon from '@/assets/routes-cubes/agriculture.svg?url';
import CityIcon from '@/assets/routes-cubes/city.svg?url';
import HealthIcon from '@/assets/routes-cubes/health.svg?url';
import IndustryIcon from '@/assets/routes-cubes/industry.svg?url';
import EnergyGridIcon from '@/assets/routes-cubes/energy-grid.svg?url';

import { customerCards } from '@/constants/home-page';

const { industry, energyGrid, city, agriculture, health } = customerCards;

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

export const cubePartsLinks = {
  [cubeParts.cognitiveEngine]: CognitiveEngineLink,
  [cubeParts.dataSpaces]: DataSpacesLink,
  [cubeParts.edgeCloudServices]: EdgeCloudServicesLink,
  [cubeParts.governance]: GovernanceLink,
  [cubeParts.edgeMicroDataCenters]: EdgeMicroDataCentersLink,
};

export const routesCubesIcons = {
  [agriculture.route]: AgricultureIcon,
  [city.route]: CityIcon,
  [health.route]: HealthIcon,
  [industry.route]: IndustryIcon,
  [energyGrid.route]: EnergyGridIcon,
};
