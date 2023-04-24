import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import * as admin from 'firebase-admin';
import { FIREBASE_ADMIN } from './app.module';

let serviceAccount = require("./../serviceAccount.json");

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: FIREBASE_ADMIN, useFactory: () => admin.apps[0] || admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://fibal-app.firebaseio.com"
      }) }
],
})
export class AppServerModule {}
