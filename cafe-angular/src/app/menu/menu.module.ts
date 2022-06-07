import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryList } from './category-list/category-list.component';
import { DishesList } from './dishes-list/dishes-list.component';

@NgModule({
  declarations: [CategoryList, DishesList],
  imports: [CommonModule],
  exports: [CategoryList, DishesList],
  providers: [],
  bootstrap: [],
})
export class MenuModule {}