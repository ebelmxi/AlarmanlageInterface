import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  private showAddPerson: boolean = false;
  private person = {
    firstName: '',
    lastName: '',
    number: null
  };

  constructor() { }

  ngOnInit() {
  }

  toggleAddPerson() {
    this.showAddPerson = !this.showAddPerson;
  }
}
