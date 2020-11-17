import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterIncidenceRoutingModule } from './register-incidence-routing.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterIncidenceRoutingModule
  ]
})
export class RegisterIncidenceModule { }
