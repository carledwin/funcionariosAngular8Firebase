import { Funcionario } from './models/funcionario.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioDataService {

  private funcionarioSource = new BehaviorSubject({funcionario: null, key: ''});
  funcionarioAtual = this.funcionarioSource.asObservable();

  constructor() { }

  obterFuncionario(funcionario: Funcionario, key: string) {
    this.funcionarioSource.next({funcionario: funcionario, key: key});
  }
}
