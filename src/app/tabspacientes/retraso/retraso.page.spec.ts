import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrasoPage } from './retraso.page';

describe('RetrasoPage', () => {
  let component: RetrasoPage;
  let fixture: ComponentFixture<RetrasoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrasoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrasoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
