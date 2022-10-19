import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyextosComponentComponent } from './proyextos-component.component';

describe('ProyextosComponentComponent', () => {
  let component: ProyextosComponentComponent;
  let fixture: ComponentFixture<ProyextosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyextosComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyextosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
