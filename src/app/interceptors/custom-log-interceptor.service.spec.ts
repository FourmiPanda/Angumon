import { TestBed } from '@angular/core/testing';

import { CustomLogInterceptorService } from './custom-log-interceptor.service';

describe('CustomLogInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomLogInterceptorService = TestBed.get(CustomLogInterceptorService);
    expect(service).toBeTruthy();
  });
});
