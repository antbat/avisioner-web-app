import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexDiagnosticComponent } from './complex-diagnostic.component';

describe('ComplexDiagnosticComponent', () => {
  let component: ComplexDiagnosticComponent;
  let fixture: ComponentFixture<ComplexDiagnosticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexDiagnosticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
