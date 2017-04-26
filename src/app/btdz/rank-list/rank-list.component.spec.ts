import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankListComponent } from './rank-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StubModule } from '../../_stub/stub.module';

describe('RankListComponent', () => {
  let component: RankListComponent;
  let fixture: ComponentFixture<RankListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StubModule],
      declarations: [RankListComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
