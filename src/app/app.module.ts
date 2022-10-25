import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoAlternoComponent } from './empleado-alterno/empleado-alterno.component';
import { CaracteristicasClienteCComponent } from './caracteristicas-cliente-c/caracteristicas-cliente-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { ClienteService } from './cliente.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyextosComponentComponent } from './proyextos-component/proyextos-component.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponetComponent } from './contacto-componet/contacto-componet.component';
import { RouterModule, Routes } from '@angular/router';
import { ActializaComponentComponent } from './actializa-component/actializa-component.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'proyectos', component: ProyextosComponentComponent},
  {path: 'quienes', component: QuienesSomosComponent},
  {path: 'contacto', component: ContactoComponetComponent},
  {path: 'f5/:id', component: ActializaComponentComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoAlternoComponent,
    CaracteristicasClienteCComponent,
    HomeComponentComponent,
    ProyextosComponentComponent,
    QuienesSomosComponent,
    ContactoComponetComponent,
    ActializaComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService,
  ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
