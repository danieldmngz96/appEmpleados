import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasClienteCComponent } from './caracteristicas-cliente-c.component';

describe('CaracteristicasClienteCComponent', () => {
  let component: CaracteristicasClienteCComponent;
  let fixture: ComponentFixture<CaracteristicasClienteCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicasClienteCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicasClienteCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
