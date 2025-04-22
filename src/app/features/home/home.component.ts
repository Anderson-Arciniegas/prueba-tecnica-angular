import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { Subscription } from 'rxjs';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [MatCardModule, NgForOf, FlexLayoutModule],
  standalone: true,
})
export class HomeComponent implements OnInit {
  products: Product[] = []
  
  private _subscription = new Subscription
  constructor(private _productService: ProductService,
    private _router: Router,
  ){}
  
  
  ngOnInit(): void {
    this._subscription.add(
      this._productService.getProducts().subscribe((res) => {
        this.products = res;
        console.log(this.products)
      })
    );
  }
  
  goToProduct(product: Product) {
    this._router.navigate(['product', product.id]);
  }
}
