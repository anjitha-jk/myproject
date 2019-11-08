import { Component, OnInit } from '@angular/core';
import { Product } from '../model/productinterface';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  myproduct: Array <Product> = [
    {
  name: 'Apple case',
  description: 'phone cover',
  price: 2000,
  image_alt: 'https://media.chumbak.com/media/catalog/product/8/9/8907605077647_top.jpg' ,
  availability: false
    },

    {
      name: 'Owl bag',
      description: 'Bags and clutches',
      price: 7000,
      // tslint:disable-next-line: max-line-length
      image_alt: 'http://thriftcoupons.com/wp-content/uploads/2015/09/Chumbak-Body-Sling-Bag.png' ,
      availability: true
    },

    {
      name: 'Plate',
      description: 'Plates and more',
      price: 3000,
      // tslint:disable-next-line: max-line-length
      image_alt: 'https://media.chumbak.com/media/catalog/product/8/9/8907605057090_top_6.jpg' ,
      availability: false
    }
];

  constructor() {

   }

  ngOnInit() {
  }

}
