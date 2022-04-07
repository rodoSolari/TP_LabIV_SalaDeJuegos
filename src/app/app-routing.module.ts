import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { ErrorComponent } from './page/error/error.component';
import { JuegosComponent } from './page/juegos/juegos.component';
import { PreguntadosComponent } from './page/juegos2022/preguntados/preguntados.component';
import { LoginComponent } from './page/login/login.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { RegistroComponent } from './page/registro/registro.component';
import { TatetiComponent } from './page/tateti/tateti.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"registro", component:RegistroComponent},
  {path:"home", component:BienvenidoComponent},
  
  /*{path:"juegos", component:JuegosComponent},
  {path:"juegos/tateti", component:TatetiComponent},
  {path:"juegos/preguntados", component:PreguntadosComponent},
*/
  {path:"juegos", component:JuegosComponent,
    children:[
      {path:"tateti", component:TatetiComponent},
      {path:"preguntados", component:PreguntadosComponent},
  ]},
  {path:"quien-soy", component:QuienSoyComponent},
  {path:"", redirectTo:"/home",pathMatch:"full"},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
