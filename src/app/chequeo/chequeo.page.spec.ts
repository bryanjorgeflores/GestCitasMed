import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeoPage } from './chequeo.page';

describe('ChequeoPage', () => {
  let component: ChequeoPage;
  let fixture: ComponentFixture<ChequeoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
