import { Component, OnInit } from '@angular/core';
import { Product} from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService) { 
    
  }

  products: Product[] = [];

  ngOnInit() {
    this.fetchProducts();
   // this.products = this.productService.getAllProducts();
  }

  clickProduct(id: number) {
    console.log(id);
  }

  fetchProducts() {
    this.productService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

}
