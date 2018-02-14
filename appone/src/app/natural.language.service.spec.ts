import { TestBed, inject } from '@angular/core/testing';

import { NaturalLanguageService } from './natural.language.service';

describe('Natural.LanguageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaturalLanguageService]
    });
  });

  it('should be created', inject([NaturalLanguageService], (service: NaturalLanguageService) => {
    expect(service).toBeTruthy();
  }));
});
