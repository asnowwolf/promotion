import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BonusByPerson } from '../btdz/_models/bonus-by-person';

@Injectable()
export class BtdzStubApi {

  constructor() {
  }

  queryByPerson(): Observable<BonusByPerson[]> {
    return Observable.of([
      {
        'bonus': 10280.00,
        'maxBonus': 11420.00,
        'memName': '杜王泺',
        'rankNo': 1,
        'teamName': '杭州分行本部',
      },
    ]);
  }
}
