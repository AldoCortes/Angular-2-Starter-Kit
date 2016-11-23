import {Component} from '@angular/core';

@Component({
  selector: 'main-menu',
  template: require('./main-menu.html')
})
export class MainMenuComponent {
  toggleMenu() {
    console.log("toggled");
  }
}
