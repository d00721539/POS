import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedoutitembybusinessPage } from './checkedoutitembybusiness.page';

describe('CheckedoutitembybusinessPage', () => {
  let component: CheckedoutitembybusinessPage;
  let fixture: ComponentFixture<CheckedoutitembybusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedoutitembybusinessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedoutitembybusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
