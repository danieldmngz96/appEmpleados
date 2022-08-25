import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoAlternoComponent } from './empleado-alterno.component';

describe('EmpleadoAlternoComponent', () => {
  let component: EmpleadoAlternoComponent;
  let fixture: ComponentFixture<EmpleadoAlternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoAlternoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoAlternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
