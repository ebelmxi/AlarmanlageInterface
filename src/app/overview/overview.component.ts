import { Component, OnInit } from '@angular/core';
import {SensorsService} from "../sensors.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  private sensors;

  constructor(private sensorsService: SensorsService) { }

  ngOnInit() {
    this.sensors = this.sensorsService.getSensors();
  }

}
