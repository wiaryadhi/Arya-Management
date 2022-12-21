import {Component, Input} from '@angular/core';
import {IProduct} from "../../../interfaces/i-product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  @Input() product!: IProduct;

}
