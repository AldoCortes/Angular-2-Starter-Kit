import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {BrandsComponent} from './brands';
import {BrandComponent} from './brand';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    BrandsComponent,
    BrandComponent
  ],
  exports: [
    BrandsComponent
  ]
})
export class BrandsModule {}
