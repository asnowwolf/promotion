import { inject, TestBed } from '@angular/core/testing';

import { BtdzApi } from './btdz.api';
import { HttpModule } from '@angular/http';

fdescribe('BtdzApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [BtdzApi],
    });
  });

  it('should ...', inject([BtdzApi], (service: BtdzApi) => {
    expect(service).toBeTruthy();
  }));
});
