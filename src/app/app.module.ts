import {NgModule, CUSTOM_ELEMENTS_SCHEMA, InjectionToken} from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

import type { app } from 'firebase-admin';

export const FIREBASE_ADMIN = new InjectionToken<app.App>('firebase-admin');

const routes = [
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'blog-post',
    loadChildren: () =>
      import('./pages/blog-post/blog-post.module').then(
        (m) => m.BlogPostModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }), ComponentsModule],
// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
