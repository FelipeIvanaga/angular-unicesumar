import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.css']
})
export class ProductControlComponent implements OnInit {

  productBrand: string;
  productModel: string;
  productPrice: number;
  productWeight: number;
  productType: string;
  listProduct: Array<any>;

  onSubmit(){
    this.listProduct.push({
      brand: this.productBrand,
      model: this.productModel,
      price: this.productPrice,
      weight: this.productWeight,
      type: this.productType
    })

    this.productBrand = '';
    this.productModel = '';
    this.productPrice = null;
    this.productWeight = null;
    this.productType = '';

  }

  constructor() {
    this.listProduct = new Array<any>();
   }

  ngOnInit() {
  }

}
