import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroControlComponent } from './livro-control.component';

describe('LivroControlComponent', () => {
  let component: LivroControlComponent;
  let fixture: ComponentFixture<LivroControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
