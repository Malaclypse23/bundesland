import { Component, OnInit } from '@angular/core';

import { Bundesland } from '../bundesland.model';
import { BundeslandService } from '../bundesland.service';

@Component({
  selector: 'app-bundesland-list',
  templateUrl: './bundesland-list.component.html',
  styleUrls: ['./bundesland-list.component.css']
})
export class BundeslandListComponent implements OnInit {
  states: Bundesland[] = [];
  letters: Map<string, number>;
  selectedState: Bundesland;

  constructor(public dataService: BundeslandService) {
  }

  ngOnInit(): void {
    this.states = this.dataService.getStates();
    this.letters = this.dataService.getLetters();
  }

  loadState(url: string): void {
    this.selectedState = this.dataService.getState(url);
  }
}
