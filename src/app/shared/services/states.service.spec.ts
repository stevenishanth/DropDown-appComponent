import { TestBed, inject } from '@angular/core/testing';

import { StatesService } from './states.service';

describe('StatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatesService]
    });
  });

  it('should ...', inject([StatesService], (service: StatesService) => {
    expect(service).toBeTruthy();
  }));
});
