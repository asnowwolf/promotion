import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BonusByPerson } from '../_models/bonus-by-person';
import { BonusByArea } from '../_models/bonus-by-area';
import { BonusByTeam } from '../_models/bonus-by-team';

@Injectable()
export class BtdzApi {

  constructor(private http: Http) {
  }

  queryByPerson(): Observable<BonusByPerson[]> {
    return this.http.get('/api/bonusByPerson')
      .map((resp) => resp.json().data)
      .map(BonusByPerson.from);
  }

  queryByArea(): Observable<BonusByArea[]> {
    return this.http.get('/api/bonusByArea')
      .map((resp) => resp.json().data)
      .map(BonusByArea.from);
  }

  queryByTeam(): Observable<BonusByTeam[]> {
    return this.http.get('/api/bonusByTeam')
      .map((resp) => resp.json().data)
      .map(BonusByTeam.from);
  }
}
