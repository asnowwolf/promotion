import { Component, OnInit } from '@angular/core';
import { BonusByPerson } from '../../_models/bonus-by-person';
import 'rxjs/add/operator/map';
import { BtdzApi } from '../../_apis/btdz.api';

@Component({
  selector: 'app-by-person',
  templateUrl: './by-person.component.html',
  styleUrls: ['./by-person.component.scss'],
})
export class ByPersonComponent implements OnInit {
  items: BonusByPerson[];

  constructor(private api: BtdzApi) {
  }

  ngOnInit(): void {
    this.api.queryByPerson()
      .subscribe((items) => this.items = items);
  }

}
