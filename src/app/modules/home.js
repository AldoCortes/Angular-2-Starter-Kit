import {Component} from '@angular/core';
import {UIRouter} from 'ui-router-ng2/router';

@Component({
  selector: 'home',
  template: require('../views/home.html')
})
export class HomeComponent {
  constructor(uiRouter_: UIRouter) {
    this.uiRouter = uiRouter_;
  }

  navToServices() {
    this.uiRouter.stateService.go('Services');
  }
}
