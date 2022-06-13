import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Subject, takeUntil } from 'rxjs';
import { Category } from 'src/app/shared/classes/category/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  // providers: [DataService],
})

export class CategoryList implements OnInit, OnDestroy {
  title = 'category-list';
  categories!: Category[];
  destroy: Subject<void> = new Subject<void>();

  constructor(public service: DataService) {}

  @Output() onClick = new EventEmitter();

  ngOnInit() {
    this.getCategories();

    this.service.updateCategories.pipe(takeUntil(this.destroy)).subscribe(() => {
      this.getCategories();
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  getCategories(): void {
    this.service.getCategories().pipe(takeUntil(this.destroy)).subscribe((response: any) => {
      this.categories = response;
    });
  }

  getDishes(categoryId: number | undefined): void {
    this.onClick.emit(categoryId);
  }

}
