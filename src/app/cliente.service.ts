import { Injectable } from "@angular/core";
import { Cliente } from "./cliente.module";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class ClienteService{
  constructor(private   alertService: ServicioEmpleadosService){

  }
  clientes:Cliente[]=[

    new Cliente("Daniel" , "Dominguez", "Dev Software", 7500),
    new Cliente("Arturo" , "Dominguez", "Dev Software", 4500),
    new Cliente("Juan" , "Dominguez", "Agricultor", 500),
    new Cliente("Jhon" , "Dominguez", "Civil", 5500),
    new Cliente("Diana" , "Lopez", "Contadora", 2500),
    new Cliente("Paula" , "Torres", "Abogada", 3500),
    new Cliente("Teresa" , "Medina", "", 300),
  ];

  agregarClienteServicio(clientes:Cliente){
    this.alertService.muestraMensaje("cliente se agrego con la siguiente informacion"+ "\n"+
   "Nombre" + "\n" + clientes.nombre + "\n" +
    "Apellido"+ "\n" + clientes.apellido + "\n" +
   "Cargo" + "\n" + clientes.cargo  + "\n" +
   "Salario" + "\n" + clientes.salario)
    this.clientes.push(clientes);
  }
}
