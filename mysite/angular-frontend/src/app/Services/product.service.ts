import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Interfaces/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private productUrl = 'http://127.0.0.1:8000/api/products/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl)
  }

  get(id: String): Observable<any> {
    return this.http.get<Product[]>(this.productUrl + id);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.productUrl, data);
  }

  update(id: String, data: any): Observable<any> {
    return this.http.put(this.productUrl + id + '/' , data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(this.productUrl + id + '/');
  }
}
