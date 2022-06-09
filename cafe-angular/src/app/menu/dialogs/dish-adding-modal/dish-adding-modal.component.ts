import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Dish } from '../../../shared/classes/dish/dish';

@Component({
  selector: 'dish-adding-modal',
  templateUrl: 'dish-adding-modal.component.html',
  styleUrls: ['./dish-adding-modal.component.css'],
})

// export class Dish {

// }
export class DishAddingModal implements OnInit {
  dish = new Dish();
  categories: any;

  constructor(
    public service: DataService,
    public dialogRef: MatDialogRef<DishAddingModal>
  ) {}

  ngOnInit() {
    this.service.getCategories().subscribe((response: any) => {
      this.categories = response;
    });
  }

  addDish() {
    console.log(this.dish);
    this.service.addDish(this.dish).subscribe((data) => {
      // console.log(data)
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
