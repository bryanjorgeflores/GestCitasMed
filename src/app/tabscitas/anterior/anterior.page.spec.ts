import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteriorPage } from './anterior.page';

describe('AnteriorPage', () => {
  let component: AnteriorPage;
  let fixture: ComponentFixture<AnteriorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnteriorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnteriorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
