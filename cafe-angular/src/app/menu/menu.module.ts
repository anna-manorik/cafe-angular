import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CategoryList } from './category-list/category-list.component';
import { DishesList } from './dishes-list/dishes-list.component';
import { DishInfoModal } from './dialogs/dish-info-modal/dish-info-modal.component';
import { DishAddingModal } from './dialogs/dish-adding-modal/dish-adding-modal.component';
import { CategoryAddingModal } from './dialogs/category-adding-modal/category-adding-modal.component';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoryList,
    DishesList,
    DishAddingModal,
    CategoryAddingModal,
    DishInfoModal,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CategoryList,
    DishesList,
    DishAddingModal,
    CategoryAddingModal,
    DishInfoModal,
  ],
  providers: [],
  bootstrap: [],
})
export class MenuModule {}
