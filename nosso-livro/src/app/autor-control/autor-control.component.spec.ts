import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorControlComponent } from './autor-control.component';

describe('AutorControlComponent', () => {
  let component: AutorControlComponent;
  let fixture: ComponentFixture<AutorControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
