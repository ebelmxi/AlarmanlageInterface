import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { SettingsComponent } from './settings/settings.component';
import { HistoryComponent } from './history/history.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { SensorsService } from "./sensors.service";
import { SensorComponent } from './shared/sensor/sensor.component';
import { PersonsComponent } from './settings/persons.component';
import { ScheduleComponent } from './settings/schedule.component';
import { SensorsComponent } from './settings/sensors.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    SettingsComponent,
    HistoryComponent,
    SensorComponent,
    PersonsComponent,
    ScheduleComponent,
    SensorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    SensorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
