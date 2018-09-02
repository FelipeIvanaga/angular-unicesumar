import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-control',
  templateUrl: './client-control.component.html',
  styleUrls: ['./client-control.component.css']
})
export class ClientControlComponent implements OnInit {


  clientName: string;
  clientCpf: string;
  clientEmail: number;
  clientPhone: number;
  clientBirthday: string;
  listClient: Observable<any[]>;

  onSubmit(){
    this.db.list('/clients').push({
      name: this.clientName,
      cpf: this.clientCpf,
      email: this.clientEmail,
      phone: this.clientPhone,
      birthday: this.clientBirthday
    })

    this.clientName = '';
    this.clientCpf = '';
    this.clientEmail = null;
    this.clientPhone = null;
    this.clientBirthday = '';

  }

  constructor(public db: AngularFireDatabase) {
    this.listClient = db.list('clients').valueChanges();
   }
  
  ngOnInit() {
  }

}
