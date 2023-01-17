import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorHomeComponent } from './components/color-home/color-home.component';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  declarations: [
    AppComponent,
    ColorHomeComponent
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
