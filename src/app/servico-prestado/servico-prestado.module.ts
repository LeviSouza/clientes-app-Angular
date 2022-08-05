import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoprestadoFormComponent } from './servicoprestado-form/servicoprestado-form.component';
import { ServicoprestadoListaComponent } from './servicoprestado-lista/servicoprestado-lista.component';



@NgModule({
  declarations: [
    ServicoprestadoFormComponent, 
    ServicoprestadoListaComponent
  ],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule,
    FormsModule,
    RouterModule
  ],exports:[
    ServicoprestadoFormComponent, 
    ServicoprestadoListaComponent
  ]
})
export class ServicoPrestadoModule { }
