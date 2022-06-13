import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Dish } from 'src/app/shared/classes/dish/dish';
import { Category } from 'src/app/shared/classes/category/category';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  updateCategories = new Subject<void>();
  updateDishes = new Subject<void>();
  searchDishes = new Subject<string>();

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/categories');
  }

  public getCategoryById(categoryId: number): Observable<Category> {
    return this.http.get<Category>(`http://localhost:3000/categories?id=${categoryId}`);
  }

  public getAllDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>('http://localhost:3000/dishes');
  }

  public getDishes(categoryId: number): Observable<Dish[]> {
    return this.http.get<Dish[]>(
      `http://localhost:3000/dishes?categoryId=${categoryId}`
    );
  }

  public getDishInfo(dishId: number): Observable<Dish> {
    return this.http.get<Dish>(`http://localhost:3000/dishes?id=${dishId}`);
  }

  public addCategory(categoryForm: Category): Observable<void> {
    return this.http.post<void>('http://localhost:3000/categories', categoryForm);
  }

  public addDish(dishForm: Dish): Observable<void> {
    return this.http.post<void>('http://localhost:3000/dishes', dishForm);
  }

  public deleteDish(dishId: number | undefined): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/dishes/${dishId}`);
  }

  public searchDish(searchValue: string): Observable<Dish[]> {
    return this.http.get<Dish[]>(`http://localhost:3000/dishes?title_like=${searchValue}`);
  }
}
