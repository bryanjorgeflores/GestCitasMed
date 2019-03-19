import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabscitasPage } from './tabscitas.page';

describe('TabscitasPage', () => {
  let component: TabscitasPage;
  let fixture: ComponentFixture<TabscitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabscitasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabscitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
