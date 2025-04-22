import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { Subscription } from 'rxjs';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-details',
  imports: [MatCardModule, NgForOf, FlexLayoutModule, MatButtonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  standalone: true,
})
export class ProductDetailsComponent {
  id: string = '';
  product: Product = {};
  
  private _subscription = new Subscription
  
  constructor(private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute,
  ){}
  
  
  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id') as string;
    this._subscription.add(
      this._productService.getProduct(this.id).subscribe((res) => {
        this.product = res;
        console.log(this.product)
      })
    );
  }
  
  goBack(){
    this._router.navigate(['/']);
  }

}
