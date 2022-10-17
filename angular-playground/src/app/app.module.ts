import { LoginModule } from './modules/login/login.module';
import { LoginChallengeModule } from './modules/codelandia-challenges/login-challenge/login-challenge.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChihiroChallengeComponent } from './modules/codelandia-challenges/chihiro-challenge/chihiro-challenge.component';
import { ChihiroChallengeModule } from './modules/codelandia-challenges/chihiro-challenge/chihiro-challenge.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    LoginChallengeModule,
    LoginModule,
    ChihiroChallengeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
