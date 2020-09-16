import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BundeslandListComponent } from './bundesland-list.component';
import { BundeslandService } from '../bundesland.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BundeslandListComponent', () => {
  let component: BundeslandListComponent;
  let fixture: ComponentFixture<BundeslandListComponent>;
  // let service: BundeslandService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundeslandListComponent ],
     // providers: [BundeslandService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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

  it('should call the button handler when button is clicked', async(() => {
    spyOn(component, 'loadState');
    const bundeslandComponent = fixture.debugElement.nativeElement.querySelector('app-bundesland');
    bundeslandComponent.dispatchEvent(new Event('click'));
    fixture.whenStable().then(() => {
      expect(component.loadState).toHaveBeenCalled();
    });
  }));

  it('should call the dataService when the button handler function is called', async(() => {
    const url = '/Bundesland/Bayern';
    const serviceSpy = spyOn(component.dataService, 'getState');
    component.loadState(url);
    fixture.whenStable().then(() => {
      expect(serviceSpy).toHaveBeenCalled();
      // expect(component.loadDetails.emit).toHaveBeenCalledWith(component.character.url);
    });
  }));
});
