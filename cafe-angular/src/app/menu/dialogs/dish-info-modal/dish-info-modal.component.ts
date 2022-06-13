import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { Dish } from 'src/app/shared/classes/dish/dish';

@Component({
  selector: 'dish-info-modal',
  templateUrl: 'dish-info-modal.component.html',
  styleUrls: ['./dish-info-modal.component.css'],
})

export class DishInfoModal {
  dishInfo!: Dish;
  destroy: Subject<void> = new Subject<void>();

  constructor(public service: DataService, public dialogRef: MatDialogRef<DishInfoModal>, @Inject(MAT_DIALOG_DATA) public dishId: number) {}

  ngOnInit() {
    this.service.getDishInfo(this.dishId).pipe(takeUntil(this.destroy)).subscribe((response: any) => {
      this.dishInfo = response[0];
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
