import {Component, OnInit} from '@angular/core';
import {NgbAccordionConfig, NgbAccordionModule} from "@ng-bootstrap/ng-bootstrap";
import {ProductService} from "../../services/product.service";
import {IProduct, IProductWrapper} from "../../interfaces/i-product";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  products: Array<IProduct> = [];
  product: IProduct = {} as IProduct;
  showMore: boolean = false;

  constructor(private productService: ProductService) {
  }
  ngOnInit(): void{
    this.onAll()
  }
  onAll(): void {
    this.productService.all().subscribe(
      (response: IProductWrapper) => {
        this.products = response.products;
      }
    );
  }

  showToggle(): void {
    this.showMore = !this.showMore;
  }

  showDetail(p: IProduct): void {
    this.product = p
  }




}
