import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BuchstabeComponent } from './buchstabe.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('BuchstabeComponent', () => {
  let component: BuchstabeComponent;
  let fixture: ComponentFixture<BuchstabeComponent>;
  let letterElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuchstabeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchstabeComponent);
    component = fixture.componentInstance;
    letterElement = fixture.debugElement.query(By.css('.letter'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display the letter-element when the input is null', () => {
    component.letter = null;
    fixture.detectChanges();
    expect(letterElement).toBeFalsy();
  });

  it('should display the card-element when the input is defined', () => {
    component.letter = 'a';
    fixture.detectChanges();
    expect(letterElement).toBeDefined();
  });

  it('should capitalize and display the letter', () => {
    component.letter = 'a';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.letter').textContent).toContain('A');
  });
});
