import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.module';
import { ClienteService } from '../cliente.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actializa-component',
  templateUrl: './actializa-component.component.html',
  styleUrls: ['./actializa-component.component.css']
})
export class ActializaComponentComponent implements OnInit {
  titulo = 'Listado de clientes';
  mensaje = '';
  registrado =false;
  cargo:string="";
  nombre = '';
  apellido = '';
  constructor(private router: Router,
    private service:ServicioEmpleadosService,
    private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clientes=this.clienteService.clientes;
  }
  clientes:Cliente[]=[];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:any="00";
  agregarCliente(){
    let miCliente = new Cliente(this.cuadroNombre , this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // this.service.muestraMensaje("Nombre del empleado"
    // + miCliente.nombre);
    this.clienteService.agregarClienteServicio(miCliente)
  }

  arrayCaracteristicas = [''];

  addCaracteristicas(newCaracteristica: string) {
    this.arrayCaracteristicas.push(newCaracteristica);
  }
}
