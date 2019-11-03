import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloballocaluserupdatePage } from './globallocaluserupdate.page';

describe('GloballocaluserupdatePage', () => {
  let component: GloballocaluserupdatePage;
  let fixture: ComponentFixture<GloballocaluserupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloballocaluserupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloballocaluserupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
