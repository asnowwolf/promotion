import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByAreaComponent } from './by-area.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BtdzInMemoryApiService } from '../../mock/btdz-in-memory-api.service';
import { BtdzApi } from '../../_apis/btdz.api';
import { HttpModule } from '@angular/http';

describe('ByAreaComponent', () => {
  let component: ByAreaComponent;
  let fixture: ComponentFixture<ByAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(BtdzInMemoryApiService),
      ],
      declarations: [ByAreaComponent],
      providers: [BtdzApi],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
