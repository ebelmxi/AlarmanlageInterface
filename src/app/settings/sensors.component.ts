import { Component, OnInit } from '@angular/core';
import {SensorsService} from "../sensors.service";
import {throttleTime} from "rxjs/operator/throttleTime";

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {

  private inputAdd: boolean;
  private inputSelected: any;
  private showInput: boolean = false;

  private sensors;
  private modules = [0x20, 0x21];

  constructor(private sensorsService: SensorsService) {
    this.sensors = this.sensorsService.getSensors();
  }

  ngOnInit() {
  }

  showAdd() {
    this.showInput = true;
    this.inputAdd = true;
    this.inputSelected = {
      name: '',
      description: '',
      status: true,
      module: null,
      port: null
    };
  }

  showEdit(index) {
    this.showInput = true;
    this.inputAdd = false;
    this.inputSelected = this.sensors[index];
  }

  hideInput() {
    this.showInput = false;
  }

  addItem() {
    this.sensors.push(this.inputSelected);
  }

  deleteItem(index) {
    this.sensors.splice(index, 1);
  }
}
