import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { MaterialModule } from '../material/material.module';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { AvisameComponent } from './pages/avisame/avisame.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ListaComponent } from './pages/lista/lista.component';


@NgModule({
  declarations: [
    LayoutComponent,
    TiendaComponent,
    AcercaDeComponent,
    AvisameComponent,
    ProductoComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }