import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Header, Footer],
  imports: [BrowserModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [Header, Footer],
  providers: [],
  bootstrap: [],
})
export class CoreModule {}
