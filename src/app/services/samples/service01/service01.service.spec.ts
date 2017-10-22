import { TestBed, inject } from '@angular/core/testing';

import { Service01Service } from './service01.service';

describe('Service01Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service01Service]
    });
  });

  it('should be created', inject([Service01Service], (service: Service01Service) => {
    expect(service).toBeTruthy();
  }));
});
