import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateTitleGuard } from './guards/update-title.guard';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports: [],
  providers: [UpdateTitleGuard],
})
export class CoreModule {
}
