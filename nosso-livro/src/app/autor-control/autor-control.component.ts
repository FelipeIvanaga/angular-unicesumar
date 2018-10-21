import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-autor-control',
  templateUrl: './autor-control.component.html',
  styleUrls: ['./autor-control.component.css']
})
export class AutorControlComponent implements OnInit {

  nome : string;
  nome_abreviacao : string;
  email : string;

  lista_autor : Observable<any[]>;

  constructor(public db: AngularFireDatabase) { 
    this.lista_autor = db.list('autor').valueChanges();
  }

  onSubmit(){
    this.db.list('/autor').push({
      nome : this.nome,
      abreviacao : this.nome_abreviacao,
      email : this.email
    })
    
    this.nome = '';
    this.nome_abreviacao = '';
    this.email = '';
  }

  ngOnInit() {
  }

}
