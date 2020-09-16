import { Bundesland } from './bundesland.model';
import { Injectable } from '@angular/core';
import data from './bundesland.json';

@Injectable({
  providedIn: 'root'
})
export class BundeslandService {
  data: any = data;

  public getStates(): Bundesland[] {
    return this.data.stateList;
  }

  public getState(url: string): Bundesland {
    return this.data.stateList.find(x => x.url === url);
  }

  public getLetters(): Map<string, number> {
    return this.data.personIndexCounts;
  }
}
