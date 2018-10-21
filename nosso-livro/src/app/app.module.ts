import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutorControlComponent } from './autor-control/autor-control.component';
import { CategoriaControlComponent } from './categoria-control/categoria-control.component';
import { EditoraControlComponent } from './editora-control/editora-control.component';
import { LivroControlComponent } from './livro-control/livro-control.component';

@NgModule({
  declarations: [
    AppComponent,
    AutorControlComponent,
    CategoriaControlComponent,
    EditoraControlComponent,
    LivroControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
