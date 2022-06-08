import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [Header, Footer],
  imports: [BrowserModule, MaterialModule],
  exports: [Header, Footer],
  providers: [],
  bootstrap: [],
})
export class CoreModule {}
