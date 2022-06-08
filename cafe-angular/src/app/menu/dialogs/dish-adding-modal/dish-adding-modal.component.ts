import { Component } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dish-adding-modal',
  templateUrl: 'dish-adding-modal.component.html',
  styleUrls: ['./dish-adding-modal.component.css'],
})

export class DishAddingModal {
  dishId: any;
  dishInfo: any;

  constructor(public service: DataService, public dialogRef: MatDialogRef<DishAddingModal>) {}

  ngOnInit() {
    this.service.getDishInfo(this.dishId).subscribe((response: any) => {
      this.dishInfo = response[0];
      console.log(response);
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}