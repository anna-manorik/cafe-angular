import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Category } from '../../../shared/classes/category/category';

@Component({
  selector: 'category-adding-modal',
  templateUrl: 'category-adding-modal.component.html',
  styleUrls: ['./category-adding-modal.component.css'],
})

// export class Dish {

// }
export class CategoryAddingModal {
category = new Category();

  constructor(
    public service: DataService,
    public dialogRef: MatDialogRef<CategoryAddingModal>
  ) {}

  addCategory() {
    this.service.addCategory(this.category).subscribe((data) => {
      // console.log(data)
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}