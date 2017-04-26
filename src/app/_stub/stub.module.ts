import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkStubDirective } from './router-link.stub.directive';
import { RouterLinkActiveStubDirective } from './router-link-active-stub.directive';
import { BtdzStubApi } from './btdz-stub-api';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [RouterLinkStubDirective, RouterLinkActiveStubDirective],
  exports: [RouterLinkStubDirective, RouterLinkActiveStubDirective],
  providers: [BtdzStubApi],
})
export class StubModule {
}
