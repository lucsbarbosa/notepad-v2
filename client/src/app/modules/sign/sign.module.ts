import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/design/material.module';
import { SignRoutingModule } from './sign-routing.module';
import { FormsModule } from '@angular/forms';

import { SignComponent } from './pages/sign.component';

@NgModule({
  declarations: [
    SignComponent
  ],
  imports: [
    CommonModule,
    SignRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class SignModule { }
