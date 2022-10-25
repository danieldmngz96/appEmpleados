import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActializaComponentComponent } from './actializa-component.component';

describe('ActializaComponentComponent', () => {
  let component: ActializaComponentComponent;
  let fixture: ComponentFixture<ActializaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActializaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActializaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
