import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ServiceService } from '../service.service';
import { getAuth } from '@firebase/auth';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
 data = {
    email:'',
    password:'',
    nom:'',
    prenom:""
   };

constructor( private fireAuth: AngularFireAuth,
  private service: ServiceService,
   private route :Router ,
   private afDB: AngularFireDatabase) {}

   ngOnInit() {}

  public soumettre(donnee: any){
     console.log(donnee.value);
     this.fireAuth.createUserWithEmailAndPassword(donnee.value.login, donnee.value.password).then(
       (result)=>{
         const user = getAuth().currentUser;
         const userId = user.uid;
         this.afDB.object('Users/'+userId).set(donnee.value);
       }
      );
      donnee.reset();
     this.route.navigateByUrl("/home")
      }


   }
