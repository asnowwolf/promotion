import { async, inject, TestBed } from '@angular/core/testing';

import { BtdzApi } from './btdz.api';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BtdzInMemoryApiService } from '../mock/btdz-in-memory-api.service';

describe('BtdzApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        InMemoryWebApiModule.forRoot(BtdzInMemoryApiService),
      ],
      providers: [BtdzApi],
    });
  });

  let api: BtdzApi;

  beforeEach(inject([BtdzApi], (_api_: BtdzApi) => {
    api = _api_;
  }));

  it('should be injected', () => {
    expect(api).toBeTruthy();
  });

  it('should query by person', async(() => {
    api.queryByPerson().subscribe((items) => {
      expect(items[0].rankNo).toEqual(1);
      expect(items[0].memName).toEqual('杜王泺');
    });
  }));
  it('should query by team', async(() => {
    api.queryByTeam().subscribe((items) => {
      expect(items[0].memNum).toEqual(130);
    });
  }));
  it('should query by area', async(() => {
    api.queryByArea().subscribe((items) => {
      expect(items[0].maxBonusSum).toBeCloseTo(236380, 0.1);
    });
  }));
});
