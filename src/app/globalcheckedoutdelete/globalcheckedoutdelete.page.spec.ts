import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalcheckedoutdeletePage } from './globalcheckedoutdelete.page';

describe('GlobalcheckedoutdeletePage', () => {
  let component: GlobalcheckedoutdeletePage;
  let fixture: ComponentFixture<GlobalcheckedoutdeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalcheckedoutdeletePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalcheckedoutdeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
