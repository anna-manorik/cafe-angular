import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'category-adding-modal',
  templateUrl: 'category-adding-modal.component.html',
  styleUrls: ['./category-adding-modal.component.css'],
})

export class CategoryAddingModal implements OnInit {
categoryForm: FormGroup = new FormGroup({});

  constructor(
    public service: DataService,
    public dialogRef: MatDialogRef<CategoryAddingModal>,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.categoryForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  addCategory() {
    this.service.addCategory(this.categoryForm.value).subscribe(() => {
      this.service.updateCategories.next();
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  get title(): AbstractControl {
    return this.categoryForm.get('title') as AbstractControl;
  }
}