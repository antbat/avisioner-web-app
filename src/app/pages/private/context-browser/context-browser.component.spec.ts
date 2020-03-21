import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextBrowserComponent } from './context-browser.component';

describe('ContextBrowserComponent', () => {
  let component: ContextBrowserComponent;
  let fixture: ComponentFixture<ContextBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
