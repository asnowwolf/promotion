import { Component, OnInit } from '@angular/core';
import { BtdzApi } from '../../_apis/btdz.api';
import { BonusByArea } from '../../_models/bonus-by-area';

@Component({
  selector: 'app-by-area',
  templateUrl: './by-area.component.html',
  styleUrls: ['./by-area.component.scss'],
})
export class ByAreaComponent implements OnInit {

  items: BonusByArea[];

  constructor(private api: BtdzApi) {
  }

  ngOnInit(): void {
    this.api.queryByArea().subscribe((items) => this.items = items);
  }

}
