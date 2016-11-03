import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  private showInput: boolean = false;
  private selectedEdit: boolean = false;
  private selectedIndex;
  private selectedPerson;
  private persons = [
    {
      firstName: 'Maximilian',
      lastName: 'Ebel',
      number: '015254063449'
    },
    {
      firstName: 'Heidelinde',
      lastName: 'Ebel',
      number: '015254063449'
    },
    {
      firstName: 'Willi',
      lastName: 'Ebel',
      number: '015254063449'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  showAddPerson() {
    this.selectedPerson = {
      firstName: '',
      lastName: '',
      number: ''
    };
    this.showInput = true;
    this.selectedEdit = false;
  }
  showEditPerson(index) {
    this.selectedIndex = index;
    this.selectedPerson = this.persons[index];
    this.showInput = true;
    this.selectedEdit = true;
  }
  hideInput() {
    this.showInput = false;
  }

  addPerson() {
    this.showInput = false;
    this.persons.push(this.selectedPerson);
  }

  deletePerson(index) {
    this.persons.splice(index, 1);
  }
}
