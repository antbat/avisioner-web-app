import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalContextContainerComponent } from './internal-context-container.component';

describe('InternalContextContainerComponent', () => {
  let component: InternalContextContainerComponent;
  let fixture: ComponentFixture<InternalContextContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalContextContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalContextContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
