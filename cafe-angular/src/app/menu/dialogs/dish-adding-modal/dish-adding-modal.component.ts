import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Category } from 'src/app/shared/classes/category/category';

@Component({
  selector: 'dish-adding-modal',
  templateUrl: 'dish-adding-modal.component.html',
  styleUrls: ['./dish-adding-modal.component.css'],
})
export class DishAddingModal implements OnInit, OnDestroy {
  dishForm: FormGroup = new FormGroup({});
  categories!: Category[];
  destroy: Subject<void> = new Subject<void>();

  constructor(
    public service: DataService,
    public dialogRef: MatDialogRef<DishAddingModal>
  ) {}

  ngOnInit() {
    this.service
      .getCategories()
      .pipe(takeUntil(this.destroy))
      .subscribe((response) => {
        this.categories = response;
      });

    this.dishForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9_-]{1,50}$'), Validators.maxLength(5)]),
      price: new FormControl('', Validators.required),
      categoryId: new FormControl(),
      discription: new FormControl(),
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  addDish() {
    this.service.addDish(this.dishForm.value).subscribe(() => {
      this.service.updateDishes.next();
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  get title(): AbstractControl {
    return this.dishForm.get('title') as AbstractControl;
  }

  get price(): AbstractControl {
    return this.dishForm.get('price') as AbstractControl;
  }
}
