import { Component, OnInit } from '@angular/core';
import { BtdzApi } from '../../_apis/btdz.api';
import { BonusByTeam } from '../../_models/bonus-by-team';

@Component({
  selector: 'app-by-team',
  templateUrl: './by-team.component.html',
  styleUrls: ['./by-team.component.scss'],
})
export class ByTeamComponent implements OnInit {

  items: BonusByTeam[];

  constructor(private api: BtdzApi) {
  }

  ngOnInit(): void {
    this.api.queryByTeam().subscribe((items) => this.items = items);
  }

}
