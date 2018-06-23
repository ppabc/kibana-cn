
import './app_switcher';
import './global_nav_link';

import globalNavTemplate from './global_nav.html';
import './global_nav.less';
import { uiModules } from 'ui/modules';

const module = uiModules.get('kibana');

module.directive('globalNav', globalNavState => {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      chrome: '=',
      isVisible: '=',
      logoBrand: '=',
      smallLogoBrand: '=',
      appTitle: '=',
    },
    template: globalNavTemplate,
    link: scope => {
      // App switcher functionality.
      function updateGlobalNav() {
        const isOpen = globalNavState.isOpen();
        scope.isGlobalNavOpen = isOpen;
        scope.globalNavToggleButton = {
          classes: isOpen ? 'global-nav-link--close' : undefined,
          title: isOpen ? '折叠' : '展开',
          tooltipContent: isOpen ? '折叠侧边栏' : '展开侧边栏',
        };

        // Notify visualizations, e.g. the dashboard, that they should re-render.
        scope.$root.$broadcast('globalNav:update');
      }

      updateGlobalNav();

      scope.$root.$on('globalNavState:change', () => {
        updateGlobalNav();
      });

      scope.toggleGlobalNav = event => {
        event.preventDefault();
        globalNavState.setOpen(!globalNavState.isOpen());
      };

    }
  };
});
