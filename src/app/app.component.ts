import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav;
  title = 'Application Title';

  status: boolean = true;
  toggleText = 'Deaktivieren';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.sidenav.close();
    });
  }

  toggleStatus() {
    this.status = !this.status;
    if (this.status) {
      this.toggleText = 'Deaktivieren';
    } else {
      this.toggleText = 'Aktivieren';
    }
  }
}
