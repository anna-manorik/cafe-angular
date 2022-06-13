import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  // providers: [DataService],
})

export class CategoryList implements OnInit, OnDestroy {
  title = 'category-list';
  categories: any;
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(public service: DataService) {}

  @Output() onClick = new EventEmitter();

  ngOnInit() {
    this.getCategories();

    this.service.updateCategories.pipe(takeUntil(this.destroy)).subscribe(() => {
      this.getCategories();
    });
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }

  getCategories(){
    this.service.getCategories().pipe(takeUntil(this.destroy)).subscribe((response: any) => {
      this.categories = response;
    });
  }

  getDishes(categoryId: number) {
    this.onClick.emit(categoryId);
  }

}
