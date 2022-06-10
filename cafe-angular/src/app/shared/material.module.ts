import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatTableModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  exports: [MatButtonModule, MatTableModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  providers: [],
  bootstrap: [],
})
export class MaterialModule {}
