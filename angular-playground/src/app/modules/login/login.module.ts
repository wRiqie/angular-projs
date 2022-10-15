import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [CommonModule, MatInputModule],
  exports: [LoginComponent],
  declarations: [LoginComponent],
})
export class LoginModule {}
