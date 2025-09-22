import { Component } from "@angular/core";


@Component({
    selector: `uswds-button-group-item`,
    template: `
    <ng-content></ng-content>
  `,
    host: {
        'class': 'usa-button-group__item'
    },
    standalone: false
})
export class USWDSButtonGroupItemComponent {}
