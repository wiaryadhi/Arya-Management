import {Component, Input} from '@angular/core';
import {IProduct} from "../../../interfaces/i-product";
import {ProductService} from "../../../services/product.service";
import {ToastService} from "../../../services/toast.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  input: any = "";
  products: Array<IProduct> = []
  showMore: boolean = false;
  @Input() product: IProduct = {} as IProduct;
  showToast: boolean = false

  isConfirmedDeleted: boolean = false;


  constructor(private productService: ProductService, private toastService: ToastService) {
  }

  showToggle(): void {
    this.showMore = !this.showMore;
  }

  cancel() {
    this.product = {} as IProduct;
    this.showMore = false;
  }

  setProduct(product: IProduct) {
    this.product = JSON.parse(JSON.stringify(product))
  }

  onCreate() {
    this.productService.create(this.product)
      .subscribe(
        (response: IProduct) => {
          this.showMore = false;
          this.product = {} as IProduct;
          this.toastService.showToast = true;
          this.toastService.message = `Berhasil menyimpan data ${response.title}`
        }
      )
  }

  onUpdate() {
    this.productService.update(this.product)
      .subscribe(
        (response: IProduct) => {
          this.showMore = false;
          this.product = {} as IProduct;
          this.toastService.showToast = true;
          this.toastService.message = `Berhasil merubah data ${response.title} dengan id ${response.id}`
        }
      );

  }

  onDelete(){
    this.productService.update(this.product)
      .subscribe(
        (response: IProduct) => {
          this.showMore = false;
          this.product = {} as IProduct;
          this.toastService.showToast = true;
          this.toastService.message = `Berhasil menghapus data ${response.title} dengan id ${response.id}`
          this.product.isDeleted = true;
          console.log(response)
          this.isConfirmedDeleted = false;
        }
      );
  }
}
