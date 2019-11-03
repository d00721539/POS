import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloballocaluserdeletePage } from './globallocaluserdelete.page';

describe('GloballocaluserdeletePage', () => {
  let component: GloballocaluserdeletePage;
  let fixture: ComponentFixture<GloballocaluserdeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloballocaluserdeletePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloballocaluserdeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
