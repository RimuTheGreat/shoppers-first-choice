import { TestBed } from '@angular/core/testing';

import { AuthGuard } from '../_helpers/auth.guard';

describe('HelpersGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
