import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryList } from './category-list/category-list.component';
import { DishesList } from './dishes-list/dishes-list.component';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CategoryList, DishesList],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [CategoryList, DishesList],
  providers: [],
  bootstrap: [],
})
export class MenuModule {}