import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Bundesland } from './../bundesland.model';

@Component({
  selector: 'app-bundesland',
  templateUrl: './bundesland.component.html',
  styleUrls: ['./bundesland.component.css']
})
export class BundeslandComponent {
  @Input()
  bundesland: Bundesland;

  @Output()
  newState: EventEmitter<string> = new EventEmitter<string>();
}
