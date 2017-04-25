import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ByPersonComponent } from './rank-list/by-person/by-person.component';
import { ByAreaComponent } from './rank-list/by-area/by-area.component';
import { ByTeamComponent } from './rank-list/by-team/by-team.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: '战绩',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ByPersonComponent,
      },
      {
        path: 'area',
        component: ByAreaComponent,
      },
      {
        path: 'team',
        component: ByTeamComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BtdzRoutingModule {
}
