import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoginPageRoutingModule } from './login-routing.module';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export default class LoginPage implements OnInit {
    user = {
      email:'',
      password:''

    };
    connected:boolean;


  constructor( private fireModule: AngularFireAuth, private route :Router , private afDB: AngularFireDatabase) {
    this.fireModule.authState.subscribe(auth=>{
      if (!auth){
        this.connected=false;

      }
      else{
        this.connected=true;

        this.route.navigateByUrl("/home")

      }

    })

   }
  ngOnInit() {

  }
   login(){
    this.afDB.list('Users').push({
      // pseudo: 'drissas'
    });

    this.fireModule.signInWithEmailAndPassword(this.user.email,this.user.password);

    this.user = {
     email:'',
     password:''

   };

   function logout() {

  }

}
signUp(){
  this.route.navigateByUrl("/register");
}
password(){
  this.route.navigateByUrl("/password");
}

}
function signUp() {
  throw new Error('Function not implemented.');
}

