import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-control',
  templateUrl: './livro-control.component.html',
  styleUrls: ['./livro-control.component.css']
})
export class LivroControlComponent implements OnInit {

  titulo : string;
  edicao : string;
  ano : string;
  paginas : string;
  autor : string;
  categoria : string;
  editora : string;

  constructor() { }

  ngOnInit() {
  }

}
