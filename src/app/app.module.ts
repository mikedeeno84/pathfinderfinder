import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartSearchPipe } from './smart-search.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FullFilterPipe } from './full-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SmartSearchPipe,
    FullFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
