import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule
  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule
  ]
})
export class MaterialImportsModule {}
