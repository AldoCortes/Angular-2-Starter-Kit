import {BrowserModule} from '@angular/platform-browser';
import {UIView, UIRouterModule, provideUIRouter} from 'ui-router-ng2';
import {STATES, MyUIRouterConfig} from './routes';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {HomeComponent} from './modules/home.js';
import {HeaderComponent} from './shared/header.component.js';
import {FooterComponent} from './shared/footer.component.js';

@UIRouterModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    provideUIRouter({configClass: MyUIRouterConfig})
  ],
  states: STATES,
  bootstrap: [UIView]
})
export class AppModule {}
