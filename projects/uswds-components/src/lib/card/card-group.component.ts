import { Component } from '@angular/core';


@Component({
    selector: `uswds-card-group`,
    template: `
  <ul class="usa-card-group">
    <ng-content></ng-content>
  </ul>`,
    standalone: false
})
export class USWDSCardGroupComponent {
  
}
