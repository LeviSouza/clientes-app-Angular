import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { servicoPrestadoBusca } from './servico-prestado/servicoprestado-lista/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURLBase + '/api/servicos-prestados';

  constructor(private http: HttpClient) { }

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado>{
    return this.http.post<ServicoPrestado>(`${this.apiURL}`,servicoPrestado);
  }

  buscar(nome: string, mes: number): Observable<servicoPrestadoBusca[]>{
    const httpParams = new HttpParams()
    .set("nome", nome)
    .set("mes",mes ? mes.toString(): '');
    
    const url = this.apiURL+"?"+ httpParams.toString();
    
    return this.http.get<any>(url);
  }
}
