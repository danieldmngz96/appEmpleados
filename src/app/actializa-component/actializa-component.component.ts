import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private clienteService:ClienteService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.clientes=this.clienteService.clientes;
    this.indice=this.route.snapshot.params['id'];
    let cliente:Cliente=this.clienteService.encontrarCliente(this.indice);
    this.cuadroNombre=cliente.nombre;
    this.cuadroApellido = cliente.apellido;
    this.cuadroCargo = cliente.cargo;
    this.cuadroSalario = cliente.salario;
  }
  clientes:Cliente[]=[];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:any="00";
  indice:number;
  actualizaCliente(){
    let miCliente = new Cliente(this.cuadroNombre , this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // this.service.muestraMensaje("Nombre del empleado"
    // + miCliente.nombre);
    this.clienteService.actualizarClienteServicio(this.indice, miCliente);

    this.router.navigate([""]);
  }

  arrayCaracteristicas = [''];

  addCaracteristicas(newCaracteristica: string) {
    this.arrayCaracteristicas.push(newCaracteristica);
  }

  deleteClients(){
    this.clienteService.deleteClienteServicio(this.indice);

    this.router.navigate([""]);
  }
}
