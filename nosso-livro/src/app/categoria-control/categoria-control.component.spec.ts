import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaControlComponent } from './categoria-control.component';

describe('CategoriaControlComponent', () => {
  let component: CategoriaControlComponent;
  let fixture: ComponentFixture<CategoriaControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
