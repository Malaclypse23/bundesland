import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundeslandListComponent } from './bundesland-list.component';

describe('BundeslandListComponent', () => {
  let component: BundeslandListComponent;
  let fixture: ComponentFixture<BundeslandListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundeslandListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundeslandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
