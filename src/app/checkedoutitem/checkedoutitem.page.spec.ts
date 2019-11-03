import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedoutitemPage } from './checkedoutitem.page';

describe('CheckedoutitemPage', () => {
  let component: CheckedoutitemPage;
  let fixture: ComponentFixture<CheckedoutitemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedoutitemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedoutitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
