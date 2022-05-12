import { Component, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario : Usuario = new Usuario();

  constructor(public service : UsuarioService) { 
  }

  ngOnInit(): void { 
  }

  login(){

    let usuario = {
      email : this.usuario.email,
      clave : this.usuario.clave,
    }


    this.service.subirLog(usuario)
    .then( res =>{
      console.log('Usuario subido correctamente',res);
    })
    .catch( err=>{
      console.log(err);
    });
  }
  /*nuevoUsuario(){
    console.info("nuevoUsuario");
    this.unUsuario = new Usuario("email@hotmail.com","claveUsuario");
  }*/

  /*crearUsuario(){
    console.info("crearUsuario");
    this.usuarioCreado.emit(this.unUsuario);
    this.unUsuario=null;
  }*/

}
