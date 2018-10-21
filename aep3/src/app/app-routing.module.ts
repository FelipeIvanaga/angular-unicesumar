import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicoControlComponent } from './medico-control/medico-control.component';

const routes: Routes = [
  { path : 'medico', component : MedicoControlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
