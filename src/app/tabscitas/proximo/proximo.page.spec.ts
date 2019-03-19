import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximoPage } from './proximo.page';

describe('ProximoPage', () => {
  let component: ProximoPage;
  let fixture: ComponentFixture<ProximoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
