import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalcheckedoutlistPage } from './globalcheckedoutlist.page';

describe('GlobalcheckedoutlistPage', () => {
  let component: GlobalcheckedoutlistPage;
  let fixture: ComponentFixture<GlobalcheckedoutlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalcheckedoutlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalcheckedoutlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
