import { TestBed, inject } from '@angular/core/testing';

import { OrganizationStoreService } from './organization-store.service';

describe('OrganizationStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationStoreService]
    });
  });

  it('should be created', inject([OrganizationStoreService], (service: OrganizationStoreService) => {
    expect(service).toBeTruthy();
  }));
});
