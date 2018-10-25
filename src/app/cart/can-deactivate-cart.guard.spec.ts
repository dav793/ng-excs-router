import { TestBed, async, inject } from '@angular/core/testing';

import { CanDeactivateCartGuard } from './can-deactivate-cart.guard';

describe('CanDeactivateCartGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateCartGuard]
    });
  });

  it('should ...', inject([CanDeactivateCartGuard], (guard: CanDeactivateCartGuard) => {
    expect(guard).toBeTruthy();
  }));
});
