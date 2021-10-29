import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { getAuth } from '@firebase/auth';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  liste:any;
  userId: any;
  email:any;
  prenom:any ;
  nom: any;
  connected: boolean;


  constructor(private fireModule: AngularFireAuth,private route :Router, private afDB: AngularFireDatabase) {
    this.fireModule.authState.subscribe(auth=>{
      if (!auth){
        this.connected=false;

      }
      else{
        this.connected=true;
        this.route.navigateByUrl("/home")
        const user = getAuth().currentUser;
        const userId = user.uid;
        this.afDB.list("Users/"+userId).valueChanges().subscribe(
          (data)=>{
            this.nom = data[1];
            
            console.log(data)
          }
        )


      }

    })
    this.afDB.list("Users").valueChanges().subscribe(
      data=>{
      this.liste=data
      }

    )

  }


  profil(){
    this.route.navigateByUrl('/profile');
  }
  recherche(){
    this.route.navigateByUrl('/recherche');
  }
  deconnexion(){
    this.fireModule.signOut();
    this.route.navigateByUrl('/login');
  }

}
