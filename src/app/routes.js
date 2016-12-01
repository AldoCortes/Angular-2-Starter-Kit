import {Injectable} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';

import {HomeComponent} from './modules/home.js';
import {ServicesComponent} from './modules/services.js';
import {TeamComponent} from './modules/team.js';
import {ContactComponent} from './modules/contact.js';

export const STATES = [
  {
    name: 'Home',
    url: '/',
    data: {activeTab: 'home'},
    component: HomeComponent
  },
  {
    name: 'Services',
    url: '/servicios',
    data: {activeTab: 'services'},
    component: ServicesComponent
  },
  {
    name: 'Team',
    url: '/equipo',
    data: {activeTab: 'team'},
    component: TeamComponent
  },
  {
    name: 'Us',
    url: '/',
    data: {activeTab: 'us'},
    component: HomeComponent
  },
  {
    name: 'Contact',
    url: '/contacto',
    data: {activeTab: 'contact'},
    component: ContactComponent
  }
];

@Injectable()
export class MyUIRouterConfig {
  configure(uiRouter: UIRouter) {
    uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go('Home'));
  }
}
