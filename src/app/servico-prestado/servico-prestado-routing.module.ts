import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ServicoprestadoFormComponent } from './servicoprestado-form/servicoprestado-form.component';
import { ServicoprestadoListaComponent } from './servicoprestado-lista/servicoprestado-lista.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
 {path: 'servicos-prestados', component: LayoutComponent, canActivate: [AuthGuard], children:[
 { path: 'form', component: ServicoprestadoFormComponent},
 { path: 'lista', component: ServicoprestadoListaComponent},
 {path: '', redirectTo: '/servicos-prestados/lista', pathMatch: 'full'}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
