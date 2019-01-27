import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chess2Page } from './chess2.page';

describe('Chess2Page', () => {
  let component: Chess2Page;
  let fixture: ComponentFixture<Chess2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chess2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chess2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
