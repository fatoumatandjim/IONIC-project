import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getAuth } from '@firebase/auth';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public prenom: any;
  public nom : any;
  public email : any;

 constructor(

      private afDB: AngularFireDatabase,
      ) {
        const user = getAuth().currentUser;
        const userId = user.uid;
        this.afDB.list("Users/"+userId).valueChanges().subscribe(
          (data)=>{
            this.nom = data[1];
            this.prenom = data[3];
            this.email = data[0];
            console.log(data)
          }
        )

        }


  ngOnInit() {
}

}
