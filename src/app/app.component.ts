import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav;
  private title = 'Application Title';
  private toolbarColor: 'primary'|'warn' = 'primary';
  private statusButtonColor: 'primary'|'warn' = 'warn';
  private status: boolean = true;
  private toggleText = 'Deaktivieren';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.sidenav.close();
    });
  }

  toggleStatus() {
    this.status = !this.status;
    if (this.status) {
      this.toggleText = 'Deaktivieren';
      this.toolbarColor = 'primary';
      this.statusButtonColor = 'warn';
    } else {
      this.toggleText = 'Aktivieren';
      this.toolbarColor = 'warn';
      this.statusButtonColor = 'primary';
    }
  }
}
