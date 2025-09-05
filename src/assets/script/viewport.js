import { reactive } from 'vue';

const updateSizes = (obj = {}) => {
  obj.width = window.innerWidth;
  obj.height = window.innerHeight;
  obj.screens = ['mobile', 'tablet', 'laptop', 'desktop'];

  if (obj.width >= 1440) obj.screen = 'desktop';
  else if (obj.width >= 1024) obj.screen = 'laptop';
  else if (obj.width >= 640) obj.screen = 'tablet';
  else obj.screen = 'mobile';

  // @media screen and (max-width: screen) { }
  obj.hasTarget = (screen) => {
    const targetIndex = obj.screens.indexOf(screen);
    const currentScreenIndex = obj.screens.indexOf(obj.screen);
    return currentScreenIndex >= targetIndex;
  }

  obj.isMobile = () => {
    return obj.screen === 'mobile';
  }
  return obj;
};

const viewport = reactive(updateSizes());

window.addEventListener('resize', () => {
  updateSizes(viewport);
});

export default viewport