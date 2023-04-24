
import {Component, Inject, Optional} from '@angular/core';
import type { app } from "firebase-admin";
import { FIREBASE_ADMIN } from './app.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fibalteleport';

  constructor(@Optional() @Inject(FIREBASE_ADMIN) admin: app.App) {
  }
}