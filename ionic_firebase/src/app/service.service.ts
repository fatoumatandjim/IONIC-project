import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase} from '@angular/fire/compat/database';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private angularFire: AngularFireAuth) { }

  registerUser(value){
    return new Promise<any>((resolve, rejects) =>{
      this.angularFire.createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => rejects(err))
    })
  }

  login(value){
      return new Promise<any>((resolve, rejects)=>{
        this.angularFire.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => rejects(err))
      })
  }

  userDetails(){
    return this.angularFire.user
  }
}
