import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    DateValueAccessorModule
  ],
  declarations: [UserFormComponent]
})
export class AdminModule { }
