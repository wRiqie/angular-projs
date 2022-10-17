import { ChihiroChallengeComponent } from './modules/codelandia-challenges/chihiro-challenge/chihiro-challenge.component';
import { LoginChallengeComponent } from './modules/codelandia-challenges/login-challenge/login-challenge.component';
import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/chihiro-challenge', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login-challenge',
    component: LoginChallengeComponent,
  },
  {
    path: 'chihiro-challenge',
    component: ChihiroChallengeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
