import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-medico-control',
  templateUrl: './medico-control.component.html',
  styleUrls: ['./medico-control.component.css']
})
export class MedicoControlComponent implements OnInit {

  crm: string;
  nome: string;
  especialidade: string;

  listMedico: AngularFireList<any>;

  medicos: any;
  editMedico: any;

  exibirNovo: string;
  exibirEditar: string;
  exibirExcluir: string;

  constructor(public db: AngularFireDatabase) {
    this.listMedico = db.list('/medicos');
    this.exibirNovo = 'none';
  }

  ngOnInit() {
    this.getMedicos();
    this.editMedico = {crm: '', nome: '', especialidade:''};
  }

  getMedicos() {
    this.listMedico.snapshotChanges().pipe(
      map(changes =>
        changes.map(m => ({ key: m.payload.key, ...m.payload.val() })) )
    ).subscribe(medicos => {
      this.medicos = medicos;
    })
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

  updateMedico() {
    this.listMedico.update(this.editMedico.key,({
      crm: this.crm,
      nome: this.nome,
      especialidade: this.especialidade
    }));

    this.crm = '';
    this.nome = '';
    this.especialidade = '';

    this.closeModal();
  }

  deleteMedico() {
    this.listMedico.remove(this.editMedico.key);
    this.closeModal();
  }

  openExcluirModal(medico: any) {
    this.exibirExcluir = 'block';
    this.editMedico = medico;
  }

  openNovoModal() {
    this.exibirNovo = 'block';
  }

  openEditarModal(medico: any) {
    this.exibirEditar = 'block';
    this.editMedico = medico;
    this.crm = medico.crm;
    this.nome = medico.nome;
    this.especialidade = medico.especialidade;
  }

  closeModal() {
    this.exibirNovo = 'none';
    this.exibirEditar = 'none';
    this.exibirExcluir = 'none';
  }

}
