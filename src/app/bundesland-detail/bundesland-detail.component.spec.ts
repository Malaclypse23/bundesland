import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BundeslandDetailComponent } from './bundesland-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';

describe('BundeslandDetailComponent', () => {
  let component: BundeslandDetailComponent;
  let fixture: ComponentFixture<BundeslandDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [BundeslandDetailComponent]
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
