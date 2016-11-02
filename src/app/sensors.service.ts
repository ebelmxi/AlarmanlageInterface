import { Injectable } from '@angular/core';
import {Observable, Observer} from "rxjs/Rx";

@Injectable()
export class SensorsService {
  public update$: Observable<any>;
  private updateObserver: Observer<any>;
  private sensors;

  constructor() {
    this.update$ = new Observable((observer) => {
      this.updateObserver = observer;
    }).share();

    this.sensors = [
      {
        name: 'rd-kasse',
        description: 'Radarsensor Kasse',
        status: true,
        since: new Date()
      },
      {
        name: 'pir-saft',
        description: 'Bewegungsmelder Saft',
        status: true,
        since: new Date()
      }
    ];

    setInterval(() => {
      this.updateObserver.next({
        name: 'test',
        description: 'TEST Sensor',
        status: false,
        since: new Date()
      });
    }, 2500);
  }

  getSensors() {
    return this.sensors;
  }
}
