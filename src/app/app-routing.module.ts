import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateTitleGuard } from './_core/guards/update-title.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [UpdateTitleGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/btdz',
      },
      {
        path: 'btdz',
        loadChildren: './btdz/btdz.module#BtdzModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
