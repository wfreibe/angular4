import { TestBed, inject } from '@angular/core/testing';

import { ProjectStoreService } from './project-store.service';

describe('ProjectStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectStoreService]
    });
  });

  it('should be created', inject([ProjectStoreService], (service: ProjectStoreService) => {
    expect(service).toBeTruthy();
  }));
});
