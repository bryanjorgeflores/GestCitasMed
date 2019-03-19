import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteriorPage } from './posterior.page';

describe('PosteriorPage', () => {
  let component: PosteriorPage;
  let fixture: ComponentFixture<PosteriorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosteriorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteriorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
