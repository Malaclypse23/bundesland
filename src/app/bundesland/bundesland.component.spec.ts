import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BundeslandComponent } from './bundesland.component';
import { DebugElement } from '@angular/core';

describe('BundeslandComponent', () => {
  let component: BundeslandComponent;
  let fixture: ComponentFixture<BundeslandComponent>;
  // const hostElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundeslandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundeslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  it('should not display the card-element when the input is null', () => {
    component.name$ = null;
    fixture.detectChanges();
    expect(cardElement).toBeFalsy();
  });

  it('should display the card-element when the input is defined', () => {
    const luke = { name: 'Luke Skywalker' };
    component.characterDetails$ = of(luke);
    fixture.detectChanges();
    expect(cardElement).toBeDefined();
  });
  */
});
