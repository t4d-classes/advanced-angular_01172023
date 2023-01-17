import { Component } from '@angular/core';

import { MFECommService } from 'shared-lib';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent {

  constructor(private mfeComm: MFECommService) { }

  sendMessage() {
    this.mfeComm.publish("GREETING", "hello from color tool");
  }

}
