import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categoria-control',
  templateUrl: './categoria-control.component.html',
  styleUrls: ['./categoria-control.component.css']
})
export class CategoriaControlComponent implements OnInit {

  nome_categoria : string;
  descricao : string;

  lista_categoria : Observable<any[]>;

  display : string;
  

  constructor(public db: AngularFireDatabase) {
    this.lista_categoria = db.list('categoria').valueChanges();
    this.display = 'none';
   }

  ngOnInit() {
  }
  
  closeModal(){
    this.display = 'none';
  }

  openModal(){
    this.display = 'block';
  }

  onSubmit(){
    this.db.list('/categoria').push({
      categoria : this.nome_categoria,
      descricao : this.descricao
    })

    this.nome_categoria = '';
    this.descricao = '';
  }

  onColse

}
