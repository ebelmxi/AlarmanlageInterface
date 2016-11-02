import { Component, OnInit } from '@angular/core';
import {SensorsService} from "../sensors.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  private history = [];

  constructor(private sensorServioe: SensorsService) { }

  ngOnInit() {
    this.sensorServioe.update$.subscribe((sensor) => {
      this.history.push(sensor);
    });
  }

}
