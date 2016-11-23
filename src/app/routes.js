import {Injectable} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';

import {MainComponent} from './main';
import {UsComponent} from './page/us';

export const STATES = [
  {
    name: 'App',
    url: '/',
    component: MainComponent
  },
  {
    name: 'Us',
    url: '/nosotros',
    component: UsComponent
  }
];

@Injectable()
export class MyUIRouterConfig {
  configure(uiRouter: UIRouter) {
    uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go('App'));
  }
}
