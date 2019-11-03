import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalproductupdatePage } from './globalproductupdate.page';

describe('GlobalproductupdatePage', () => {
  let component: GlobalproductupdatePage;
  let fixture: ComponentFixture<GlobalproductupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalproductupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalproductupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
