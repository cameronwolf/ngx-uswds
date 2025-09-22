import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FieldType } from '@ngx-formly/core';

@Component({
    template: `
    <usa-radio-group [tile]="to.tile" [formControl]="formControl" [name]="to.name ? to.name : 'radio-group'"  [ariaLabelledBy]="to.ariaLabelledBy">
      @for (option of to.options; track option; let i = $index) {
        <usa-radio [id]="id + '_' + i" [disabled]="option.disabled" [value]="option.value" [checked]="option.checked">{{option.label}}</usa-radio>
      }
    </usa-radio-group>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class USWDSFormlyRadioComponent extends FieldType {

}
