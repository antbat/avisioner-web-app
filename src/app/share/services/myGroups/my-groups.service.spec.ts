import { TestBed } from '@angular/core/testing';

import { MyGroupsService } from './my-groups.service';

describe('MyGroupsService', () => {
  let service: MyGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
