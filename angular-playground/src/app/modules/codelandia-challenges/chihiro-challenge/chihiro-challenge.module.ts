import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChihiroChallengeComponent } from './chihiro-challenge.component';

@NgModule({
  imports: [CommonModule, AngularSvgIconModule],
  exports: [ChihiroChallengeComponent],
  declarations: [ChihiroChallengeComponent],
  providers: [],
})
export class ChihiroChallengeModule { }
