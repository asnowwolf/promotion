import { TestBed, inject } from '@angular/core/testing';

import { BtdzStubApi } from './btdz-stub-api';

describe('BtdzStubApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BtdzStubApi]
    });
  });

  it('should ...', inject([BtdzStubApi], (service: BtdzStubApi) => {
    expect(service).toBeTruthy();
  }));
});
