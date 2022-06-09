import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../shared/classes/category/category';
import { Dish } from '../../shared/classes/dish/dish';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get('http://localhost:3000/categories');
  }

  getCategoryById(categoryId: any) {
    return this.http.get(`http://localhost:3000/categories?id=${categoryId}`);
  }

  getAllDishes() {
    return this.http.get('http://localhost:3000/dishes');
  }

  getDishes(categoryId: any) {
    return this.http.get(
      `http://localhost:3000/dishes?categoryId=${categoryId}`
    );
  }

  getDishInfo(dishId: any) {
    return this.http.get(`http://localhost:3000/dishes?id=${dishId}`);
  }

  addCategory(categoryForm: Category) {
    return this.http.post('http://localhost:3000/categories', categoryForm);
  }

  addDish(dishForm: Dish) {
    return this.http.post('http://localhost:3000/dishes', dishForm);
  }
}
