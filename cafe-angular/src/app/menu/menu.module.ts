import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryList } from './category-list/category-list.component';
import { DishesList } from './dishes-list/dishes-list.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [CategoryList, DishesList],
  imports: [CommonModule, MaterialModule],
  exports: [CategoryList, DishesList],
  providers: [],
  bootstrap: [],
})
export class MenuModule {}