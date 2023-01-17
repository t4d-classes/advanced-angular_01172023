import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';



@NgModule({
  declarations: [
    SharedLibComponent,
    ToolHeaderComponent
  ],
  imports: [
  ],
  exports: [
    SharedLibComponent,
    ToolHeaderComponent
  ]
})
export class SharedLibModule { }
