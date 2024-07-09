import CognitiveEngineIcon from '@/assets/cube-parts/cognitive-engine.svg?skipsvgo';
import DataSpacesIcon from '@/assets/cube-parts/data-space.svg?skipsvgo';
import EdgeCloudServicesIcon from '@/assets/cube-parts/edge-cloud-services.svg?skipsvgo';
import GovernanceIcon from '@/assets/cube-parts/governance.svg?skipsvgo';
import EdgeMicroDataCentersIcon from '@/assets/cubes/empty.svg';

import AgricultureIcon from '@/assets/routes-cubes/agriculture.svg?skipsvgo';
import CityIcon from '@/assets/routes-cubes/city.svg?skipsvgo';
import HealthIcon from '@/assets/routes-cubes/health.svg?skipsvgo';
import IndustryIcon from '@/assets/routes-cubes/industry.svg?skipsvgo';
import EnergyGridIcon from '@/assets/routes-cubes/energy-grid.svg?skipsvgo';

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

export const routesCubesIcons = {
  [agriculture.route]: AgricultureIcon,
  [city.route]: CityIcon,
  [health.route]: HealthIcon,
  [industry.route]: IndustryIcon,
  [energyGrid.route]: EnergyGridIcon,
};
