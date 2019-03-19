import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabspacientesPage } from './tabspacientes.page';

describe('TabspacientesPage', () => {
  let component: TabspacientesPage;
  let fixture: ComponentFixture<TabspacientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabspacientesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabspacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
