import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteproductPage } from './deleteproduct.page';

describe('DeleteproductPage', () => {
  let component: DeleteproductPage;
  let fixture: ComponentFixture<DeleteproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteproductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
