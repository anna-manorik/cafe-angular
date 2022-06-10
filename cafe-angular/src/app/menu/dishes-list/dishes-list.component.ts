import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DishInfoModal } from '../dialogs/dish-info-modal/dish-info-modal.component';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css'],
  // providers: [DataService],
})
export class DishesList implements OnInit {
  title: any;
  dishes: any;

  constructor(public service: DataService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getAllDishes();

    this.service.updateDishes.subscribe(() => {
      this.getAllDishes();
    });
  }

  getAllDishes() {
    this.service.getAllDishes().subscribe((response) => {
      this.dishes = response;
      this.title = 'All';
    });
  }

  getDishes(categoryId: any) {
    this.service.getDishes(categoryId).subscribe((response) => {
      this.dishes = response;
    });

    this.service.updateDishes.subscribe(() => {
      this.service.getDishes(categoryId).subscribe((response) => {
        this.dishes = response;
      });
    });

    this.service.getCategoryById(categoryId).subscribe((response: any) => {
      this.title = response[0].title;
    });
  }

  openDialog(dishId: any) {
    let dialogRef = this.dialog.open(DishInfoModal, {
      data: dishId,
    });
    dialogRef.componentInstance.dishId = dishId; // !!!! remove
  }

  deleteDish(dishId: number) {
    console.log(dishId);
    this.service.deleteDish(dishId).subscribe(() =>{
      this.service.updateDishes.next();
    });
    
  }
}
