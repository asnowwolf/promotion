import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[routerLinkActive]',
  exportAs: 'routerLinkActive',
})
export class RouterLinkActiveStubDirective {

  @Input() active = false;
  @Input() routerLinkActiveOptions = {exact: false};

  constructor() {
  }

}
