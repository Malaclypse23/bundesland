import { BundeslandService } from './bundesland.service';
import { TestBed } from '@angular/core/testing';

describe('BundeslandService', () => {
  let service: BundeslandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundeslandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
