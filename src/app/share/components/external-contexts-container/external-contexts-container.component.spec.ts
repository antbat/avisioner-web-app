import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalContextsContainerComponent } from './external-contexts-container.component';

describe('ExternalContextsContainerComponent', () => {
  let component: ExternalContextsContainerComponent;
  let fixture: ComponentFixture<ExternalContextsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalContextsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalContextsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
