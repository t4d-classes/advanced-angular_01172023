import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  declarations: [
    AppComponent,
    CarHomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
