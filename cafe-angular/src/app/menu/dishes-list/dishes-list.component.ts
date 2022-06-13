import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DishInfoModal } from '../dialogs/dish-info-modal/dish-info-modal.component';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css'],
  // providers: [DataService],
})
export class DishesList implements OnInit, OnDestroy {
  title: string = '';
  dishes: any;
  destroy: Subject<void> = new Subject<void>();

  constructor(public service: DataService, public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id'])
    console.log('this.router.url', this.router.url)

    if(this.router.url === '/all-dishes'){
      this.getAllDishes();

      this.service.searchDishes.pipe(takeUntil(this.destroy)).subscribe((searchValue) => {
        this.service.searchDish(searchValue).pipe(takeUntil(this.destroy)).subscribe((response) => {
          this.dishes = response;
        });
      }); // !!!! switchMap or mergeMap
    } else {
      const categoryId : number = this.activatedRoute.snapshot.params['id'];
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

  getAllDishes() {
    this.service.getAllDishes().pipe(takeUntil(this.destroy)).subscribe((response) => {
      this.dishes = response;
      this.title = 'All';
    });
  }

  getDishes(categoryId: number) {
    this.service.getDishes(categoryId).pipe(takeUntil(this.destroy)).subscribe((response) => {
      this.dishes = response;
    });

    this.service.updateDishes.subscribe(() => {
      this.service.getDishes(categoryId).pipe(takeUntil(this.destroy)).subscribe((response) => {
        this.dishes = response;
      });
    });

    this.service.getCategoryById(categoryId).pipe(takeUntil(this.destroy)).subscribe((response: any) => {
      this.title = response[0].title;
    });
  }

  openDialog(dishId: number) {
    this.dialog.open(DishInfoModal, {
      data: dishId,
    });
  }

  deleteDish(dishId: number) {
    this.service.deleteDish(dishId).pipe(takeUntil(this.destroy)).subscribe(() => {
      this.service.updateDishes.next();
    });
  }
}
