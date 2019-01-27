import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeChessPage } from './realtime-chess.page';

describe('RealtimeChessPage', () => {
  let component: RealtimeChessPage;
  let fixture: ComponentFixture<RealtimeChessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeChessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeChessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
