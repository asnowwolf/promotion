import { async, inject, TestBed } from '@angular/core/testing';

import { BtdzApi } from './btdz.api';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BtdzInMemoryApiService } from '../mock/btdz-in-memory-api.service';

fdescribe('BtdzApi', () => {
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
    api.queryByPerson().subscribe((value) => {
      expect(value[0].rankNo).toEqual(1);
    });
  }));
});
