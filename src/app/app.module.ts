import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoAlternoComponent } from './empleado-alterno/empleado-alterno.component';
import { CaracteristicasClienteCComponent } from './caracteristicas-cliente-c/caracteristicas-cliente-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { ClienteService } from './cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoAlternoComponent,
    CaracteristicasClienteCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicioEmpleadosService,
  ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
