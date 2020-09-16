import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BundeslandComponent } from './bundesland.component';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DebugElement } from '@angular/core';

describe('BundeslandComponent', () => {
  let component: BundeslandComponent;
  let fixture: ComponentFixture<BundeslandComponent>;
  let bundeslandElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BundeslandComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundeslandComponent);
    component = fixture.componentInstance;
    bundeslandElement = fixture.debugElement.query(By.css('a'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display the letter-element when the input is null', () => {
    component.bundesland = null;
    fixture.detectChanges();
    expect(bundeslandElement).toBeFalsy();
  });

  it('should display the bundesland-link when input is defined', () => {
    component.bundesland = { name: 'Bayern', foreignCountry: false, letter: 'B', schoolCount: 9020, stadtStaat: false, url: '/Bundesland/Bayern' };
    fixture.detectChanges();
    expect(bundeslandElement).toBeDefined();
  });
});
