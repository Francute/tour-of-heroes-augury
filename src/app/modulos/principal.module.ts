// Componentes de Angular
import { NgModule } from '@angular/core';                                       // Declaración de módulo
import { BrowserModule } from '@angular/platform-browser';                      // Directivas ng
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Animaciones
import { FormsModule } from '@angular/forms';                                   // Auto binding en form

// Componentes de Angular Material
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdChipsModule } from '@angular/material';

// Mis propios pipes
import { DecimalesPipe } from '../pipes/decimales.pipe';

// Mis propias directivas
import { CuerpoDeLaTarjetaDirective } from '../directivas/componentes/tarjeta/cuerpo-de-la-tarjeta.directive';
import { PieDeLaTarjetaDirective } from '../directivas/componentes/tarjeta/pie-de-la-tarjeta.directive';

// Mis propios componentes
import { HomeComponent } from '../controladores/home/home.component';
import { CabeceraComponent } from '../controladores/cabecera/cabecera.component';
import { CuerpoComponent } from '../controladores/componentes/cuerpo/cuerpo.component';
import { ListaDeHeroesComponent } from '../controladores/heroe/lista.component';
import { ShowHeroeComponent } from '../controladores/heroe/show.component';
import { TarjetaComponent } from '../controladores/componentes/tarjeta/tarjeta.component';
import { ListaDeItemsComponent } from '../controladores/componentes/items/lista-de-items.component';

@NgModule({
  declarations: [
    DecimalesPipe,
    CuerpoDeLaTarjetaDirective,
    PieDeLaTarjetaDirective,
    TarjetaComponent,
    ListaDeItemsComponent,
    HomeComponent,
    CabeceraComponent,
    CuerpoComponent,
    ShowHeroeComponent,
    ListaDeHeroesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdChipsModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class ModuloPrincipal { }
