import { TestBed, async, inject } from '@angular/core/testing';

import { UpdateTitleGuard } from './update-title.guard';

describe('UpdateTitleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateTitleGuard]
    });
  });

  it('should ...', inject([UpdateTitleGuard], (guard: UpdateTitleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
