import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatDividerModule, MatTableModule],
  exports: [MatButtonModule, MatDividerModule, MatTableModule],
  providers: [],
  bootstrap: [],
})
export class MaterialModule {}
