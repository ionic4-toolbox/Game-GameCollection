import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessboardJSPage } from './chessboard-js.page';

describe('ChessboardJSPage', () => {
  let component: ChessboardJSPage;
  let fixture: ComponentFixture<ChessboardJSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessboardJSPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessboardJSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
