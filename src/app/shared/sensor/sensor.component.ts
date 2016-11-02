import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {
  @Input() sensor;

  constructor() { }

  ngOnInit() {
  }

}
