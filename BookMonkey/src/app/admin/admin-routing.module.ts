import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookFormComponent} from '../admin/book-form/book-form.component';

const routes: Routes = [
  {
    path: 'admin',
    component: BookFormComponent
  },
  {
    path: 'admin/:isbn',
    component: BookFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
