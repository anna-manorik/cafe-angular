import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http
    .get('http://localhost:3000/categories');
  }

  getAllDishes() {
    return this.http
    .get('http://localhost:3000/dishes')
  }

  getDishes(categoryName: any) {
    return this.http
    .get(`http://localhost:3000/dishes?category=${categoryName}`)
  }
}
