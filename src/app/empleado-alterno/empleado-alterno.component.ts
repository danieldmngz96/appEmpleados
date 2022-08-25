import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../cliente.module';

@Component({
  selector: 'app-empleado-alterno',
  templateUrl: './empleado-alterno.component.html',
  styleUrls: ['./empleado-alterno.component.css']
})
export class EmpleadoAlternoComponent implements OnInit {

  @Input() empleadoDeLista:Cliente;
  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
  }
  arrayCaracteristicas = [''];

  addCaracteristicas(newCaracteristica: string) {
    this.arrayCaracteristicas.push(newCaracteristica);
  }
}
