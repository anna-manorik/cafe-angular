import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../shared/classes/category/category';
import { Dish } from '../../shared/classes/dish/dish';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  updateCategories = new Subject<void>();
  updateDishes = new Subject<void>();

  getCategories() {
    return this.http.get('http://localhost:3000/categories');
  }

  getCategoryById(categoryId: number) {
    return this.http.get(`http://localhost:3000/categories?id=${categoryId}`);
  }

  getAllDishes() {
    return this.http.get('http://localhost:3000/dishes');
  }

  getDishes(categoryId: number) {
    return this.http.get(
      `http://localhost:3000/dishes?categoryId=${categoryId}`
    );
  }

  getDishInfo(dishId: number) {
    return this.http.get(`http://localhost:3000/dishes?id=${dishId}`);
  }

  addCategory(categoryForm: Category) {
    return this.http.post('http://localhost:3000/categories', categoryForm);
  }

  addDish(dishForm: Dish) {
    return this.http.post('http://localhost:3000/dishes', dishForm);
  }

  deleteDish(dishId: number) {
    return this.http.delete(`http://localhost:3000/dishes/${dishId}`);
  }
}
