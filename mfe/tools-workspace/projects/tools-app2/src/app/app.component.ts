import { Component } from '@angular/core';

import { MFECommService } from 'shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tools-app2';

  messages: string[] = [];

  constructor(private mfeComm: MFECommService) {
    mfeComm.subscribe("GREETING", (msg : string, data: any) => {
      this.messages = [ ...this.messages, data ];
    });
  }  
}
