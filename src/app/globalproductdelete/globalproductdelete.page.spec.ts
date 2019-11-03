import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalproductdeletePage } from './globalproductdelete.page';

describe('GlobalproductdeletePage', () => {
  let component: GlobalproductdeletePage;
  let fixture: ComponentFixture<GlobalproductdeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalproductdeletePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalproductdeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
