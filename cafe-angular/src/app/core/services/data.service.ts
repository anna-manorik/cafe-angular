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

  getCategoryName(categoryId: any) {
    return this.http
    .get(`http://localhost:3000/categories?id=${categoryId}`);
  }

  getAllDishes() {
    return this.http
    .get('http://localhost:3000/dishes')
  }

  getDishes(categoryId: any) {
    return this.http
    .get(`http://localhost:3000/dishes?categoryId=${categoryId}`)
  }

  getDishInfo(dishId: any) {
    return this.http
    .get(`http://localhost:3000/dishes?id=${dishId}`)
  }
}
