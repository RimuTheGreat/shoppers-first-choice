import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CommonService {

  storeUrl = 'https://fakestoreapi.com/products/';

  constructor(private http: HttpClient) {

  }

  fetchStoreApi() {
    return this.http.get<ArrayType>(this.storeUrl);
  }
}
