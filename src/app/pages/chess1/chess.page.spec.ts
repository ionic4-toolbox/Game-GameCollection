import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessPage } from './chess.page';

describe('ChessPage', () => {
  let component: ChessPage;
  let fixture: ComponentFixture<ChessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
