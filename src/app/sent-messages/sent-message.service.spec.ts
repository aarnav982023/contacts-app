import { TestBed } from '@angular/core/testing';

import { SentMessageService } from './sent-message.service';

describe('SentMessageService', () => {
  let service: SentMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
