import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchstabeComponent } from './buchstabe.component';

describe('BuchstabeComponent', () => {
  let component: BuchstabeComponent;
  let fixture: ComponentFixture<BuchstabeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuchstabeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchstabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
