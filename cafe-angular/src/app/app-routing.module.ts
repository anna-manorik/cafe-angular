import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesList } from './menu/dishes-list/dishes-list.component';
import { PageNotFound } from './menu/pages/notFoundPage/pageNotFound.component';

const routes: Routes = [
  { path: '', component: DishesList}, // redirectTo: ''
  { path: 'all-dishes', component: DishesList },
  { path: 'dishes/:id', component: DishesList },
  { path: '**', component: PageNotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
