import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [DataService],
})

export class CategoryList implements OnInit {
  title = 'category-list';
  categories: any;

  constructor(public service: DataService) {}

  @Output() onClick = new EventEmitter();
  

  ngOnInit() {
    this.service.getCategories().subscribe((response: any) => {
      this.categories = response;
    });
  }

  getDishes(categoryName: any) {
    this.onClick.emit(categoryName);
  }

}
