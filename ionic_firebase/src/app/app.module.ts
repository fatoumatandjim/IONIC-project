import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports:
  [BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     AngularFireDatabaseModule,
     FormsModule,
     AngularFireAuthModule,
     AngularFireStorageModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
