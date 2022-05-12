import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore : AngularFirestore, private fireauth : AngularFireAuth) { }

  subirLog(usuario : any){

    return this.firestore.collection('logs').add(usuario);
  
  }

  registrarse(usuario : any){
    return  this.firestore.collection("usuariosRegistrados").add(usuario); 

  }

 
}
