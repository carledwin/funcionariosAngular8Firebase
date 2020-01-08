import { Funcionario } from './models/funcionario.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private databasePath:string = "funcionarios";

  constructor(private _angularFireDatabase: AngularFireDatabase) { }

  insert(funcionario: Funcionario) {
    this._angularFireDatabase.list(this.databasePath).push(funcionario)
          .then((result: any) => {
            console.log(result.key);
          });
  }

  update(funcionario: Funcionario, key: string) {
    this._angularFireDatabase.list(this.databasePath).update(key, funcionario);
  }

  getAll() {
    return this._angularFireDatabase.list(this.databasePath)
            .snapshotChanges()
            .pipe(map(changes => {
              return changes.map(data => ({key: data.payload.key, ...data.payload.val()}));
            }));
  }

  delete(key: string) {
    this._angularFireDatabase.list(this.databasePath).remove(key);
  }
}
