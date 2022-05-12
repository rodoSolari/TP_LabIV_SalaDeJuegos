import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  @Output() usuarioCreado: EventEmitter<any>= new EventEmitter<any>();
  usuario:Usuario | null;

  constructor(public service : UsuarioService) { 
    this.usuario = new Usuario();
    this.usuario.clave = "";
    this.usuario.email = "";
  }

  ngOnInit(): void {
    
  }

  crearUsuario(){
    /*console.info("crearUsuario");
    this.usuarioCreado.emit(this.usuario);
    this.usuario=null;*/
    
    let usuario = {
      email : "",
      clave : ""
    }
    this.service.registrarse(usuario).then()
  }

}
