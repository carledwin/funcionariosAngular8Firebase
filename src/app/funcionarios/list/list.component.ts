import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from './../models/funcionario.model';
import { FuncionarioDataService } from './../funcionario-data.service';
import { FuncionarioService } from './../funcionario.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  funcionarios: Observable<any>;

  constructor(private _funcionarioService: FuncionarioService,
              private _funcionarioDataService: FuncionarioDataService) { }

  ngOnInit() {
    this.funcionarios = this._funcionarioService.getAll();
  }

  edit(funcionario: Funcionario, key: string) {
    this._funcionarioDataService.obterFuncionario(funcionario, key);
  }
  delete(key: string) {
    this._funcionarioService.delete(key);
  }

}
