import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { Category } from '../../../shared/classes/category/category';

@Component({
  selector: 'category-adding-modal',
  templateUrl: 'category-adding-modal.component.html',
  styleUrls: ['./category-adding-modal.component.css'],
})

export class CategoryAddingModal {
category = new Category();

  constructor(
    public service: DataService,
    public dialogRef: MatDialogRef<CategoryAddingModal>
  ) {}

  addCategory() {
    this.service.addCategory(this.category).subscribe(() => {
      this.service.updateCategories.next();
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}