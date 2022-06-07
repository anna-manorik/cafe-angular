import { Component, OnInit } from '@angular/core';
import { toArray } from 'rxjs';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css'],
  providers:[DataService],
})

export class DishesList implements OnInit {
  title: any;
  dishes: any;

  constructor(public service: DataService) {}

  ngOnInit() {
    this.service.getAllDishes().subscribe((response) => {
      this.dishes = response;
      this.title = 'All';
    });
  }

  getDishes(categoryId: any){
    this.service.getDishes(categoryId).subscribe((response) => {
      this.dishes = response;
    });

    this.service.getCategoryName(categoryId).subscribe((response: any) => {
      // const array = toArray(response);
      this.title = response[0].title;
    });
  }
}
