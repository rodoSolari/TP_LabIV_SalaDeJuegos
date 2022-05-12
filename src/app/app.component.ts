import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TP_LabIV_SalaDeJuegos';

  usuarioLogueado:Usuario;

  constructor(){
    this.usuarioLogueado = new Usuario();
  }

  tomarUsuarioCreado(usuario:Usuario){
    this.usuarioLogueado = usuario;
  }



}
