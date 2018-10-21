import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraControlComponent } from './editora-control.component';

describe('EditoraControlComponent', () => {
  let component: EditoraControlComponent;
  let fixture: ComponentFixture<EditoraControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoraControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoraControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
