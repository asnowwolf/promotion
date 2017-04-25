import { TestBed, inject } from '@angular/core/testing';

import { BtdzInMemoryApiService } from './btdz-in-memory-api.service';

describe('BtdzInMemoryApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BtdzInMemoryApiService]
    });
  });

  it('should ...', inject([BtdzInMemoryApiService], (service: BtdzInMemoryApiService) => {
    expect(service).toBeTruthy();
  }));
});
