import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaControlComponent } from './categoria-control/categoria-control.component';
import { AutorControlComponent } from './autor-control/autor-control.component';
import { EditoraControlComponent } from './editora-control/editora-control.component';
import { LivroControlComponent } from './livro-control/livro-control.component';

const routes: Routes = [
  { path : 'categorias', component: CategoriaControlComponent },
  { path : 'autores', component : AutorControlComponent },
  { path : 'editoras', component : EditoraControlComponent },
  { path : 'livros', component : LivroControlComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
