import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsperaPage } from './espera.page';

describe('EsperaPage', () => {
  let component: EsperaPage;
  let fixture: ComponentFixture<EsperaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsperaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsperaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
