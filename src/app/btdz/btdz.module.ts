import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BtdzRoutingModule } from './btdz-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../_shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { QueryFormComponent } from './query-form/query-form.component';
import { RankListComponent } from './rank-list/rank-list.component';
import { ByPersonComponent } from './rank-list/by-person/by-person.component';
import { ByAreaComponent } from './rank-list/by-area/by-area.component';
import { ByTeamComponent } from './rank-list/by-team/by-team.component';

@NgModule({
  imports: [
    CommonModule,
    BtdzRoutingModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    QueryFormComponent,
    RankListComponent,
    ByPersonComponent,
    ByAreaComponent,
    ByTeamComponent,
  ],
})
export class BtdzModule {
}
