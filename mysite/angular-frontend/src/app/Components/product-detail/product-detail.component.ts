import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../Interfaces/product';
import { DARK } from '../../../environments/theme';
import { ProductService } from '../../Services/product.service';
import { ImageService } from '../../Services/image.service';
import { SiToastService, SiToastTypes } from '@simpl/siemens-brand-ng/toast';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product = {} as Product;
  tags: any = {};
  selectedTags: any = [];
  dark = DARK;



  constructor(
    private imageService: ImageService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: SiToastService
  ) { }

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.params.id);
  }

  getProduct(id: string): void {
    this.productService.get(id)
      .subscribe(
        data => {
          this.product = data;
        },
        error => {
          console.log(error);
        });
  }

  updateProduct(): void {
    this.productService.update(this.product.id, this.product)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          Object.keys(error.error).forEach(key => {
            let value = error.error[key];
            this.showErrorToast(key + ':' + value);
          });
        });
  }
  deleteProduct(): void {
    this.productService.delete(this.product.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/products']);
        },
        error => {
          console.log(error);
        });
  }

  onFileChange(event: any) {

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    const placeholder = document.getElementById('uploadedImage') as HTMLImageElement;

    reader.onload = (_event) => {
        placeholder.src = reader.result as string;
        this.imageService.postImage(event.target.files[0], this.product.id, 'product')
        .subscribe(
          response => {
            this.showSuccessToast('Uploaded Preview Image!')
          },
          error => {
            this.showErrorToast('Could not upload Preview Image!')
            console.log(error);
          });

    }
  }

  showSuccessToast(message: string) {
    this.toastService.showToast({
      content: message,
      type: SiToastTypes.SUCCESS,
      timeout: 3000,
    });
  }

  showErrorToast(message: any) {
    this.toastService.showToast({
      content: message,
      type: SiToastTypes.DANGER,
      timeout: 3000,
    });
  }

}

