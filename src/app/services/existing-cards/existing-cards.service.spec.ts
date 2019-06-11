import { TestBed } from '@angular/core/testing';

import { ExistingCardsService } from './existing-cards.service';

describe('ExistingCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExistingCardsService = TestBed.get(ExistingCardsService);
    expect(service).toBeTruthy();
  });
});
