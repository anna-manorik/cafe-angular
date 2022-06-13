import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'dish-info-modal',
  templateUrl: 'dish-info-modal.component.html',
  styleUrls: ['./dish-info-modal.component.css'],
})

export class DishInfoModal {
  // dishId: number = 0;
  dishInfo: any;
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(public service: DataService, public dialogRef: MatDialogRef<DishInfoModal>, @Inject(MAT_DIALOG_DATA) public dishId: number) {}

  ngOnInit() {
    this.service.getDishInfo(this.dishId).pipe(takeUntil(this.destroy)).subscribe((response: any) => {
      this.dishInfo = response[0];
    });
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
