import { TestBed, inject } from '@angular/core/testing';

import { NgxLoginService } from './ngx-login.service';

describe('NgxLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxLoginService]
    });
  });

  it('should be created', inject([NgxLoginService], (service: NgxLoginService) => {
    expect(service).toBeTruthy();
  }));
});
