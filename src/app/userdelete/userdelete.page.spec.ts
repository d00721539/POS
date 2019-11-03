import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdeletePage } from './userdelete.page';

describe('UserdeletePage', () => {
  let component: UserdeletePage;
  let fixture: ComponentFixture<UserdeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdeletePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
