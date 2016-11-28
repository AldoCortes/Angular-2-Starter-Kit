import {Component, Input} from '@angular/core';

@Component({
  selector: 'brand',
  template: require('../views/brand.html')
})
export class BrandComponent {
  @Input() brand;
}
