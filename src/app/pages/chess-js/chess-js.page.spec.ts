import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessJSPage } from './chess-js.page';

describe('ChessJSPage', () => {
  let component: ChessJSPage;
  let fixture: ComponentFixture<ChessJSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessJSPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessJSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
