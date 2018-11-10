import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoControlComponent } from './medico-control.component';

describe('MedicoControlComponent', () => {
  let component: MedicoControlComponent;
  let fixture: ComponentFixture<MedicoControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
