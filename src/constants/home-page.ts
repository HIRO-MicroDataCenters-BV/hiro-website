import { ROUTES } from '@/router/routes';

export const customerCards = {
  industry: {
    title: 'Industry 4.0',
    description:
      'Real-time decision making, empowers manufacturers to be more adaptive, ' +
      'proactive, and efficient in their operations, directly contributing to ' +
      'increased competitiveness and success in a fast-paced market. ' +
      'Real time decision making through local edge-cloud computing enables ' +
      'enhanced efficiency and productivity, ' +
      'quality control, safety and supply chain optimization.',
    route: ROUTES.INDUSTRY.path,
  },
  energyGrid: {
    title: 'Energy Grid 3.0',
    description:
      'The future democratic, efficient, resilient and sustainable energy ' +
      'system will be based on the combination of a wide range of ' +
      'sustainable microgrids. Solar panels, wind turbines, ' +
      'energy storage systems and hydrogen will allow local communities ' +
      'and even individual households to produce and store their own energy, ' +
      'contributing excess power back to the grid.',
    route: ROUTES.ENERGY_GRID.path,
  },
  city: {
    title: 'City 2.0',
    description:
      'Managing the limited resources such as public spaces, water, air ' +
      'and energy, preventing pollution and securing critical, ' +
      'infrastructure will be key in achieving high quality of ' +
      'life in our future cities. Privacy preserving sensing and ' +
      'data processing will support inclusivity and community ' +
      'engagement for creating and maintaining sustainable cities.',
    route: ROUTES.CITY.path,
  },
  agriculture: {
    title: 'Agriculture 3.0',
    description:
      'Innovative farming with higher yield, less waste, lower costs ' +
      'and less environmental stress and damage is needed to ' +
      'feed a growing global population in a sustainable way. ' +
      'This becomes possible through data driven advisory ' +
      'in farming and integrated value chains connecting ' +
      'farmers directly to consumers,',
    route: ROUTES.AGRICULTURE.path,
  },
  health: {
    title: 'Health 3.0',
    description:
      'Predictive healthcare allows caregivers to forecast health ' +
      'issues before they develop, plan preventative measures and ' +
      'reactive treatments. Processing locally large volumes of ' +
      'privacy sensitive data and AI are key for providing personalised care, ' +
      'fine grained and real time monitoring and treatment of chronic diseases.',
    route: ROUTES.HEALTH.path,
  },
} as const;

export const joinUsCard = {
  title: 'Join Us!',
  description:
    'Technology reshapes the way we live and work, the call for digital ' +
    'transformation has never been more urgent. Join us as we explore ' +
    'the boundless opportunities that digital technologies bring ' +
    'to industries and communities worldwide. ' +
    'Discover how Powerful Edge as a Service (PEaaS) ' +
    'delivers you digital sovereignty that can amplify ' +
    'your operational efficiency and streamline supply chains.',
} as const;
