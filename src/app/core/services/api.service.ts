import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://6807f25c942707d722dce576.mockapi.io/products';
  constructor(private _http: HttpClient,) { }
  
  get(
    path?: string,
    params?: HttpParams | Params,
  ): Observable<any> {
      let httpParams = params instanceof HttpParams ? params : new HttpParams({ fromObject: params });
      
      return this._http.get(`${this.apiUrl}/${path}`, {
          params: httpParams,
      });
  }

}
