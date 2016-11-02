import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {OVERLAY_PROVIDERS} from '@angular2-material/core';
import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdButtonModule} from '@angular2-material/button';
import {MdMenuModule} from "@angular2-material/menu";
import {MdIconModule, MdIconRegistry} from '@angular2-material/icon';
import {MdCardModule} from "@angular2-material/card";
import {MdListModule} from "@angular2-material/list";
import {MdInputModule} from "@angular2-material/input";

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { SettingsComponent } from './settings/settings.component';
import { HistoryComponent } from './history/history.component';

import {SensorsService} from "./sensors.service";
import { SensorComponent } from './shared/sensor/sensor.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    SettingsComponent,
    HistoryComponent,
    SensorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdMenuModule,
    MdIconModule,
    MdCardModule,
    MdListModule,
    MdInputModule
  ],
  providers: [
    OVERLAY_PROVIDERS,
    MdIconRegistry,
    SensorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
