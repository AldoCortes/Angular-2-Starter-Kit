import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

export class Brand {
  constructor(public name: string, public image: string, public link: string) {}
}

@Component({
  selector: 'brands',
  template: require('../views/brands.html')
})

export class BrandsComponent {
  public bands: Brand[];
  public brand: Brand;

  constructor(public http: Http) {
    this.getBrands().subscribe(result => this.brands = result);
  }

  getBrands(): Observable<Brand[]> {
    return this.http
      .get('./brands.json')
      .map(response => response.json());
  }
}
