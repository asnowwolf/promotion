import { TestBed, inject } from '@angular/core/testing';

import { BtdzApi } from './btdz.api';

describe('BtdzApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BtdzApi]
    });
  });

  it('should ...', inject([BtdzApi], (service: BtdzApi) => {
    expect(service).toBeTruthy();
  }));
});
