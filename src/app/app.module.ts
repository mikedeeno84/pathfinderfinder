import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartSearchPipe } from './smart-search.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FullFilterPipe } from './full-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterGroupComponent } from './filter-group/filter-group.component';
import { FeatListComponent } from './feat-list/feat-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SmartSearchPipe,
    FullFilterPipe,
    FilterGroupComponent,
    FeatListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
