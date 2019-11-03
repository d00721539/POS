import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessaccountlistPage } from './businessaccountlist.page';

describe('BusinessaccountlistPage', () => {
  let component: BusinessaccountlistPage;
  let fixture: ComponentFixture<BusinessaccountlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessaccountlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessaccountlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
