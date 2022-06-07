import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';

@NgModule({
  declarations: [Header, Footer],
  imports: [BrowserModule],
  exports: [Header, Footer],
  providers: [],
  bootstrap: [],
})
export class CoreModule {}
