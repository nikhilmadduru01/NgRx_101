import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {ResourcesComponent} from './resources/resources.component'
import { StoreModule } from '@ngrx/store';
import { resourceFilterByType } from "./store/filter-resource-list.reducer";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ResourcesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({filteredList:resourceFilterByType}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
