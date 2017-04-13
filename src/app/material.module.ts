import { NgModule } from '@angular/core';

import { MdToolbarModule } from "@angular/material";
import { MdSidenavModule } from "@angular/material";
import { MdButtonModule } from "@angular/material";
import { MdInputModule } from "@angular/material";
import { MdListModule } from "@angular/material";
import { MdSlideToggleModule } from "@angular/material";
import { MdButtonToggleModule } from "@angular/material";

@NgModule({
  exports: [
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdInputModule,
    MdListModule,
    MdSlideToggleModule,
    MdButtonToggleModule
  ],
})
export class MaterialModule { }
