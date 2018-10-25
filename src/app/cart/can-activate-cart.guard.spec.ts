import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateCartGuard } from './can-activate-cart.guard';

describe('CanActivateCartGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateCartGuard]
    });
  });

  it('should ...', inject([CanActivateCartGuard], (guard: CanActivateCartGuard) => {
    expect(guard).toBeTruthy();
  }));
});
