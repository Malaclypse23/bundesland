import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Bundesland } from '../bundesland.model';
import { BundeslandService } from '../bundesland.service';

@Component({
  selector: 'app-bundesland-detail',
  templateUrl: './bundesland-detail.component.html',
  styleUrls: ['./bundesland-detail.component.css']
})
export class BundeslandDetailComponent implements OnInit {
  @Input()
  selectedState: Bundesland;

  constructor(private route: ActivatedRoute, public dataService: BundeslandService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedState = this.dataService.getState(params.get('url'));
    });
  }
}
