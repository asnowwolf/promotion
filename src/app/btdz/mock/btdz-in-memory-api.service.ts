import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { bonusByPerson } from './bonus-by-person';
import { bonusByArea } from './bonus-by-area';
import { bonusByTeam } from './bonus-by-team';

@Injectable()
export class BtdzInMemoryApiService implements InMemoryDbService {
  createDb(): {} {
    return {bonusByPerson, bonusByArea, bonusByTeam};
  }

  constructor() {
  }

}
