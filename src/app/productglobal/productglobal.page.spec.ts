import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductglobalPage } from './productglobal.page';

describe('ProductglobalPage', () => {
  let component: ProductglobalPage;
  let fixture: ComponentFixture<ProductglobalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductglobalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductglobalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
