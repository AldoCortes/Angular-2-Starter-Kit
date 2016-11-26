import {Injectable} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';

import {HomeComponent} from './modules/home.js';
import {UsComponent} from './modules/us.js';

export const STATES = [
  {
    name: 'Home',
    url: '/',
    component: HomeComponent
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
    uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go('Home'));
  }
}
