import {Component, OnInit} from '@angular/core';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';
import {UIRouter} from 'ui-router-ng2/router';

@Component({
  selector: 'header',
  template: require('../views/header.html'),
  directives: [UIROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {
  detailParam: any;
  currentURL: String;
  imgPath: String = '/app/img/';
  extraClass: String = '';
  headImage: String;
  openedMenu: Boolean = false;

  constructor(uiRouter:UIRouter) {
    this.detailParam = uiRouter.globals.current.name;
    this.currentURL = uiRouter.globals.current.url;
    this.headImage = this.imgPath.concat('common/footer-logo.jpg');
    if (this.detailParam === 'Home') {
      this.extraClass = 'black';
      this.headImage = this.imgPath.concat('common/ragoo.png');
    }
  }

  ngOnInit() {
    this.links = document.getElementsByClassName('desktopMenuItem');
    for (let i = 0; i < this.links.length; i++) {
      if (this.links[i].getAttribute('href') === this.currentURL) {
        this.links[i].className += ' selected';
      }
    }
  }

  toggleMenu() {
    this.openedMenu ^= true;
  }
}
