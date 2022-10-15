import { ImageButtonComponent } from './components/image-button/image-button.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { LoginChallengeComponent } from './login-challenge.component';
import { TextFormFieldComponent } from './components/text-form-field/text-form-field.component';

@NgModule({
  imports: [CommonModule, AngularSvgIconModule],
  exports: [LoginChallengeComponent],
  declarations: [LoginChallengeComponent, TextFormFieldComponent, ImageButtonComponent],
})
export class LoginChallengeModule {}
