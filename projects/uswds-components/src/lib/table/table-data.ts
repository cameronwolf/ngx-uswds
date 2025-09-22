
import { ChangeDetectorRef, Directive, ElementRef, Input, OnChanges, TemplateRef } from "@angular/core";

@Directive({
    selector: `[usaTableDataDef]`,
    standalone: false
})
export class UsaTableDataDef {
  constructor(
    public templateRef: TemplateRef<any>,
  ) {}
}


@Directive({
    selector: `[usa-table-data]`,
    host: {
        '[attr.data-sort-active]': '_isSortActive ? _isSortActive : undefined',
    },
    standalone: false
})
export class UsaTableData {
  _isSortActive = false;

  constructor(
    public el: ElementRef
   ) {}

   setSortActive() {
     this._isSortActive = true;
   }

   setSortInactive() {
     this._isSortActive = false;
   }
}

/**
 * Represents one row of table data
 */
@Directive({
    selector: `[usaDataRowDef]`,
    standalone: false
})
export class UsaDataRowDef implements OnChanges {

  @Input()
  usaDataRowDefColumns: Iterable<string>;

  ngOnChanges() {
    this.cdr.detectChanges();
  }
  
  constructor(
    public templateRef: TemplateRef<any>,
    private cdr: ChangeDetectorRef,
  ) {}
}