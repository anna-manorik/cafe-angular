import { Component } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dish-info-modal',
  templateUrl: 'dish-info-modal.component.html',
  styleUrls: ['./dish-info-modal.component.css'],
})

export class DishInfoModal {
  dishId: any;
  dishInfo: any;

  constructor(public service: DataService, public dialogRef: MatDialogRef<DishInfoModal>) {}

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
