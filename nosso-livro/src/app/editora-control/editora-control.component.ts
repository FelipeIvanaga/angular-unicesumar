import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editora-control',
  templateUrl: './editora-control.component.html',
  styleUrls: ['./editora-control.component.css']
})
export class EditoraControlComponent implements OnInit {

  cnpj : string;
  nome_fantasia : string;
  cidade : string;

  lista_editora : Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.lista_editora = db.list('editora').valueChanges();
   }

   onSubmit() {
     this.db.list('/editora').push({
       cnpj : this.cnpj,
       nome : this.nome_fantasia,
       cidade : this.cidade
     })

     this.cnpj = '';
     this.nome_fantasia = '';
     this.cidade = '';

   }

  ngOnInit() {
  }

}
