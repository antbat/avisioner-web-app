import { TestBed } from '@angular/core/testing';

import { NotifyUserService } from './notify-user.service';

describe('NotifyUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotifyUserService = TestBed.get(NotifyUserService);
    expect(service).toBeTruthy();
  });
});
