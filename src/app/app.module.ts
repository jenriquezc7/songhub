import { environment } from '../environments/environment';
import { TvMazeService } from './services/tv-maze.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { SignUpViewModule } from './views/sign-up/sign-up-view.module';
import { SignUpViewComponent } from './views/sign-up/sign-up-view.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { LoginModule } from './views/login/login.module';
import { LoginComponent } from './views/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }, {
    path: 'login', component: LoginComponent
  },
  {
    path: 'sign-up', component: SignUpViewComponent
  },
  {
    path: 'shows', loadChildren: './features/shows/shows.module#ShowsModule'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavbarModule,
    LoginModule,
    SignUpViewModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [TvMazeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
