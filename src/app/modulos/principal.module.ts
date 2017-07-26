import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Para poder usar los componentes de Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from '../controladores/home/home.component';
import { CabeceraComponent } from '../controladores/cabecera/cabecera.component';
import { HeroeComponent } from '../controladores/heroe/heroe.component';


@NgModule({
  declarations: [
    HomeComponent,
    CabeceraComponent,
    HeroeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class ModuloPrincipal { }
