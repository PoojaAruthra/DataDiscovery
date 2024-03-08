import { Component, OnInit } from '@angular/core';
import {Product} from '../../Interfaces/product'
import { ProductService } from '../../Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  userIsStaff: Boolean = false;
  userGivenName: String = '';
  userFamilyName: String = '';
  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.userGivenName = (<any>window)["userGivenName"];
    this.userFamilyName = (<any>window)["userFamilyName"];
    this.userIsStaff = (<any>window)["userIsStaff"] == 'True' ? true : false;
    console.log(this.userIsStaff, this.userGivenName, this.userFamilyName)

  }

  searchServicesForProduct(searchString: String) {
    this.router.navigate(['../insights'], { queryParams: { search: 'Product>' + searchString } });
  }

  getProducts():void {
    this.router.navigate([]);
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }
}
