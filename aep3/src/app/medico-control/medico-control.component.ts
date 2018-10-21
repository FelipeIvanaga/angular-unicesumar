import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medico-control',
  templateUrl: './medico-control.component.html',
  styleUrls: ['./medico-control.component.css']
})
export class MedicoControlComponent implements OnInit {

  crm: string;
  nome: string;
  especialidade: string;

  listMedico: Observable<any[]>;

  exibir: string;

  constructor(public db: AngularFireDatabase) {
    this.listMedico = db.list('medicos').valueChanges();
    this.exibir = 'none';
  }

  ngOnInit() {
  }

  onSubmit() {
    this.db.list('/medicos').push({
      crm: this.crm,
      nome: this.nome,
      especialidade: this.especialidade
    })

    this.crm = '';
    this.nome = '';
    this.especialidade = '';

    this.closeModal();

  }

  openModal() {
    this.exibir = 'block';
  }

  closeModal() {
    this.exibir = 'none';
  }

}
