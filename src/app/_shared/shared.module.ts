import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdInputModule, MdTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports: [
    MdTabsModule,
    MdInputModule,
    MdButtonModule,
  ],
})
export class SharedModule {
}
