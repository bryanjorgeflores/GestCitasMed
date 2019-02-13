import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistropacientePage } from './registropaciente.page';

describe('RegistropacientePage', () => {
  let component: RegistropacientePage;
  let fixture: ComponentFixture<RegistropacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistropacientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistropacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
