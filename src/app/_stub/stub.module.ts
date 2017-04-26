import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkStubDirective } from './router-link.stub.directive';
import { RouterLinkActiveStubDirective } from './router-link-active-stub.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [RouterLinkStubDirective, RouterLinkActiveStubDirective],
  exports: [RouterLinkStubDirective, RouterLinkActiveStubDirective],
})
export class StubModule {
}
