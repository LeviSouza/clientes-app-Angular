import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service'
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from '../../servico-prestado.service';
 
@Component({
  selector: 'app-servicoprestado-form',
  templateUrl: './servicoprestado-form.component.html',
  styleUrls: ['./servicoprestado-form.component.css']
})
export class ServicoprestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: ServicoPrestado
  success: boolean = false;
  errors: String[];

  constructor( private clienteService: ClientesService,
    private service: ServicoPrestadoService) { 
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService
    .getClientes()
    .subscribe (response => this.clientes = response);
  }

  onSubmit(){
    this.service
    .salvar(this.servico)
    .subscribe(
      Response => {
        this.success = true;
        this.errors = null;
        this.servico = new ServicoPrestado();
      },
      errorResponse => {
        this.errors = errorResponse.error.errors;
        this.success = false;
      });
  }

}
