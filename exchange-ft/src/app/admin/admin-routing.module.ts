import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserFormComponent} from '../admin/user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: UserFormComponent
  },
  {
    path: ':userId',
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
