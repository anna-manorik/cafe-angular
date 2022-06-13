import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../../services/data.service';
import { CategoryAddingModal } from '../../../menu/dialogs/category-adding-modal/category-adding-modal.component';
import { DishAddingModal } from '../../../menu/dialogs/dish-adding-modal/dish-adding-modal.component';
import { fromEvent, delay, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class Header implements OnDestroy {
  title = 'Cafe-Angular';
  searchValue!: string;
  destroy: Subject<void> = new Subject<void>();

  data: any = fromEvent(document, 'change');

  constructor(public service: DataService, public dialog: MatDialog) {}

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  public openDialogCategory(): void {
    this.dialog.open(CategoryAddingModal);
  }

  public openDialogDish(): void {
    this.dialog.open(DishAddingModal);
  }

  public searchDishes(searchValue: string): void {
    

    this.data.pipe(delay(1000), takeUntil(this.destroy))
      .subscribe(() => {
        this.service.searchDishes.next(searchValue);
      });
  }
}
