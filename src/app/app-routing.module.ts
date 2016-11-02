import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OverviewComponent} from './overview/overview.component';
import {HistoryComponent} from "./history/history.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', component: OverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
