import { TestBed } from '@angular/core/testing';

import { MyFriendsService } from './my-friends.service';

describe('MyFriendsService', () => {
  let service: MyFriendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFriendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
