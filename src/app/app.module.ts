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
import { FlexLayoutModule } from '@angular/flex-layout';
import { MasterTableComponent } from './master-table/master-table.component';
import { FeatComponent } from './feat/feat.component';
import { SpellComponent } from './spell/spell.component';
import { PadComponent } from './pad/pad.component';
import { OrderByPipe } from './order-by.pipe';
import { PadListWrapperComponent } from './pad-list-wrapper/pad-list-wrapper.component';
import { ShowActionComponent } from './show-action/show-action.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartSearchPipe,
    FullFilterPipe,
    FilterGroupComponent,
    FeatListComponent,
    MasterTableComponent,
    FeatComponent,
    SpellComponent,
    PadComponent,
    OrderByPipe,
    PadListWrapperComponent,
    ShowActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    NgSelectModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
