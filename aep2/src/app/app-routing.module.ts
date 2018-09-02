import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientControlComponent } from './client-control/client-control.component';

const routes: Routes = [
  { path : 'cliente', component : ClientControlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
