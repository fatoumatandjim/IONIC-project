import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {
  liste: any;
  search: any;

  constructor( private fireModule: AngularFireAuth,
    private afDB: AngularFireDatabase) {
      this.afDB.list("Users").valueChanges().subscribe(
        data=>{
        this.liste=data
        }
      )

    }

  ngOnInit() {
  }

}
