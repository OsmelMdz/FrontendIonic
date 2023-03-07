import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from "../pages/products/product.model";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  apiUrl= 'http://localhost:8000/api';

  constructor(private http: HttpClient){}

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/productos`);
  }
  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}/newProduct`, product);
  }
  updateProduct(productId:number, product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}/editProduct/${productId}`, product);
  }
}



