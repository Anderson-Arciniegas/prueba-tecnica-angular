import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _api: ApiService, 
  ) { }
  
  getProducts(): Observable<any> {
    return this._api.get('products');
  }
  
  getProduct(id: string): Observable<any> {
    return this._api.get(`products/${id}`);
  }
}
