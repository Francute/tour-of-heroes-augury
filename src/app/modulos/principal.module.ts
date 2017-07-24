import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Para poder usar los componentes de Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { HomeComponent } from '../controladores/home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class ModuloPrincipal { }
