import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';
import {UIRouter} from 'ui-router-ng2/router';

@Component({
  selector: 'header',
  template: require('../views/header.html'),
  directives: [UIROUTER_DIRECTIVES]
})
export class HeaderComponent {
  detailParam: any;
  imgPath: String = '/app/img/';
  extraClass: String = '';
  headImage: String;

  constructor(uiRouter:UIRouter) {
    this.detailParam = uiRouter.globals.current.name;
    this.headImage = this.imgPath.concat('common/footer-logo.jpg');
    if (this.detailParam === 'Home') {
      this.extraClass = 'black';
      this.headImage = this.imgPath.concat('common/ragoo.png');
    }
  }
}
