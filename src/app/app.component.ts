import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente.module';
import { ClienteService } from './cliente.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  titulo = 'Listado de clientes';
  mensaje = '';
  registrado =false;
  cargo:string="";
  nombre = '';
  apellido = '';

  constructor(private service:ServicioEmpleadosService,
    private clienteService:ClienteService){
  }
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
