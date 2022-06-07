import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css'],
  providers:[DataService],
})

export class DishesList implements OnInit {
  title = 'dishes-list';
  dishes: any;

  constructor(public service: DataService) {}

  ngOnInit() {
    this.service.getAllDishes().subscribe((response) => {
      this.dishes = response;
    });
    // getAllDishes()
  }

  getDishes(categoryName: any){
    this.service.getDishes(categoryName).subscribe((response) => {
      console.log("dishes", response);
      this.dishes = response;
    });
  }
}
