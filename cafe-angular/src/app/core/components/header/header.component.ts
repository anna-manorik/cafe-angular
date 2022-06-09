import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../../services/data.service';
import { CategoryAddingModal } from '../../../menu/dialogs/category-adding-modal/category-adding-modal.component';
import { DishAddingModal } from '../../../menu/dialogs/dish-adding-modal/dish-adding-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class Header {
  title = 'Cafe-Angular';

  constructor(public service: DataService, public dialog: MatDialog) {}

  openDialogCategory() {
    this.dialog.open(CategoryAddingModal);
  }

  openDialogDish() {
    this.dialog.open(DishAddingModal);
  }
}
