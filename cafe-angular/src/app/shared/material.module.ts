import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatTableModule, MatDialogModule],
  exports: [MatButtonModule, MatTableModule, MatDialogModule],
  providers: [],
  bootstrap: [],
})
export class MaterialModule {}
