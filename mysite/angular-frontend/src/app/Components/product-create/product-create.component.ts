import { Component, OnInit } from '@angular/core';
import { DARK } from '../../../environments/theme';
import { Product } from '../../Interfaces/product';
import { ProductService } from '../../Services/product.service';
import { SiToastService, SiToastTypes } from '@simpl/siemens-brand-ng/toast';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  dark = DARK;
  product: Product = {} as Product;
  submitted = false;
  constructor(private productService: ProductService, private toastService: SiToastService) { }

  ngOnInit(): void {
  }


  saveProduct(): void {

    const data = {
      name: this.product.name,
      description: this.product.description,
    };

    this.productService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          Object.keys(error.error).forEach(key => {
            let value = error.error[key];
            this.showErrorToast(key + ':' + value);
          });
        });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      id: '',
      description: '',
      name: '',
      image_name: '',
      sas: '',
    };
  }

  showErrorToast(message: any) {
    this.toastService.showToast({
      content: message,
      type: SiToastTypes.DANGER,
      timeout: 3000,
    });
  }

}
