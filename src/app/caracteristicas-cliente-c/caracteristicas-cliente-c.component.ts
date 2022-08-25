import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-cliente-c',
  templateUrl: './caracteristicas-cliente-c.component.html',
  styleUrls: ['./caracteristicas-cliente-c.component.css']
})
export class CaracteristicasClienteCComponent implements OnInit {

  @Output() CaracteristicasClienteCComponent = new EventEmitter<string>();

  constructor(private Miservice:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  addCaracterisiticas(value: string) {
    this.Miservice.muestraMensaje(value);
    this.CaracteristicasClienteCComponent.emit(value);
  }

}
