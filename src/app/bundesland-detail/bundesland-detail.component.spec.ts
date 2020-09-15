import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundeslandDetailComponent } from './bundesland-detail.component';

describe('BundeslandDetailComponent', () => {
  let component: BundeslandDetailComponent;
  let fixture: ComponentFixture<BundeslandDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundeslandDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundeslandDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
