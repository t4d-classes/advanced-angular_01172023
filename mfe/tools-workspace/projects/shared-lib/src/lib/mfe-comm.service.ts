import { Injectable } from '@angular/core';
import PubSub from 'pubsub-js';

@Injectable({
  providedIn: 'root'
})
export class MFECommService {

  constructor() { }

  subscribe(topic: string, fn: (message: string,  data: any) => void) {
    PubSub.subscribe(topic, fn);
  }

  publish(topic: string, data: any) {
    PubSub.publish(topic, data);
  }
}
