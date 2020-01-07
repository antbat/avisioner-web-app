import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishDictionaryComponent } from './english-dictionary.component';

describe('EnglishDictionaryComponent', () => {
  let component: EnglishDictionaryComponent;
  let fixture: ComponentFixture<EnglishDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
