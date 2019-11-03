import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessaccountaddPage } from './businessaccountadd.page';

describe('BusinessaccountaddPage', () => {
  let component: BusinessaccountaddPage;
  let fixture: ComponentFixture<BusinessaccountaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessaccountaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessaccountaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
