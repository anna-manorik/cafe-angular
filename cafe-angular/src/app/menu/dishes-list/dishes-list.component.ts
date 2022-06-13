import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DishInfoModal } from '../dialogs/dish-info-modal/dish-info-modal.component';
import { switchMap, of, Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Dish } from 'src/app/shared/classes/dish/dish';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css'],
})
export class DishesList implements OnInit, OnDestroy {
  title: string = '';
  dishes!: Dish[];
  destroy: Subject<void> = new Subject<void>();

  constructor(
    public service: DataService,
    public dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.router.url === '/all-dishes') {
      this.getAllDishes();

      this.service.searchDishes
        .pipe(takeUntil(this.destroy))
        .subscribe((searchValue) => {
          this.service
            .searchDish(searchValue)
            .pipe(takeUntil(this.destroy))
            .subscribe((response) => {
              this.dishes = response;
            });
        });

      this.service.searchDishes.pipe(
        switchMap((searchValue) =>
          of(
            this.service
              .searchDish(searchValue)
              .pipe(takeUntil(this.destroy))
              .subscribe((response) => {
                this.dishes = response;
              })
          )
        )
      );
      
    } else {
      const categoryId: number = this.activatedRoute.snapshot.params['id'];
      this.getDishes(categoryId);
    }

    this.service.updateDishes.pipe(takeUntil(this.destroy)).subscribe(() => {
      this.getAllDishes();
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  public getAllDishes(): void {
    this.service
      .getAllDishes()
      .pipe(takeUntil(this.destroy))
      .subscribe((response) => {
        this.dishes = response;
        this.title = 'All';
      });
  }

  public getDishes(categoryId: number): void {
    this.service
      .getDishes(categoryId)
      .pipe(takeUntil(this.destroy))
      .subscribe((response) => {
        this.dishes = response;
      });

    this.service.updateDishes.subscribe(() => {
      this.service
        .getDishes(categoryId)
        .pipe(takeUntil(this.destroy))
        .subscribe((response) => {
          this.dishes = response;
        });
    });

    this.service
      .getCategoryById(categoryId)
      .pipe(takeUntil(this.destroy))
      .subscribe((response: any) => {
        this.title = response[0].title;
      });
  }

  public openDialog(dishId: number | undefined): void {
    this.dialog.open(DishInfoModal, {
      data: dishId,
    });
  }

  public deleteDish(dishId: number | undefined): void {
    this.service
      .deleteDish(dishId)
      .pipe(takeUntil(this.destroy))
      .subscribe(() => {
        this.service.updateDishes.next();
      });
  }
}
