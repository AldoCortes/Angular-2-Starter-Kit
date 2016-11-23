import {BrowserModule} from '@angular/platform-browser';
import {UIView, UIRouterModule, provideUIRouter} from 'ui-router-ng2';
import {STATES, MyUIRouterConfig} from './routes';

import {TechsModule} from './techs';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {FooterComponent} from './footer';
import {MainMenuComponent} from './modules/main-menu';

@UIRouterModule({
  imports: [
    BrowserModule,
    TechsModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent,
    MainMenuComponent
  ],
  providers: [
    provideUIRouter({configClass: MyUIRouterConfig})
  ],
  states: STATES,
  bootstrap: [UIView]
})
export class AppModule {}
