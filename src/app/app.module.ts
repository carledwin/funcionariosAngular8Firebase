import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule,
ReactiveFormsModule } from '@angular/forms';
import { FuncionarioDataService } from './funcionarios/funcionario-data.service';
import { FuncionarioService } from './funcionarios/funcionario.service';
import { environment as env} from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './funcionarios/list/list.component';
import { EditComponent } from './funcionarios/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(env.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [
              FuncionarioService,
              FuncionarioDataService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
