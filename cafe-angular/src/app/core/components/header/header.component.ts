import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../../services/data.service';
import { CategoryAddingModal } from '../../../menu/dialogs/category-adding-modal/category-adding-modal.component';
import { DishAddingModal } from '../../../menu/dialogs/dish-adding-modal/dish-adding-modal.component';
import { fromEvent, delay, ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class Header implements OnDestroy {
  title = 'Cafe-Angular';
  searchValue: string = '';
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  data: any = fromEvent(document, 'change');

  constructor(public service: DataService, public dialog: MatDialog) {}

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }

  openDialogCategory() {
    this.dialog.open(CategoryAddingModal);
  }

  openDialogDish() {
    this.dialog.open(DishAddingModal);
  }

  searchDishes(searchValue: string) {
    

    this.data.pipe(delay(1000), takeUntil(this.destroy))
      .subscribe(() => {
        this.service.searchDishes.next(searchValue);
      });
  }
}
