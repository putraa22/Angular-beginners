import { CommonModule } from '@angular/common';
import { ProductComponent } from './../components/product/product.component';
import { Products, Product } from './../../types';
import { ProductsService } from './../services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}

  products: Product[] = [];

  onProductOutput(product: Product) {
    console.log('Output >>', product);
  }

  ngOnInit() {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 })
      .subscribe((products: Products) => {
        this.products = products.items;
        console.log('aweawe', products);
      });
  }
}
