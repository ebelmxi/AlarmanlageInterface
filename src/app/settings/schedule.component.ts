import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  private active: boolean = true;
  private schedule = {
    monday: [true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true],
    tuesday: [true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true],
    wednesday: [true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true],
    thursday: [true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true],
    friday: [true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true],
    saturday: [true,true,true,true,true,true,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true],
    sunday: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]
  };

  constructor() { }

  ngOnInit() {
  }

  getColor(bool: boolean) {
    if (bool) {
      return '#009688';
    } else {
      return '#f44336';
    }
  }

  switchStatus(array: Array<boolean>, index: number) {
    array[index] = !array[index];
  }

}
