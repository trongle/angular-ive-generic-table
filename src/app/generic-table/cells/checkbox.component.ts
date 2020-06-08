import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-checkbox",
  template: `
    <mat-checkbox
      [disabled]="disabled"
      [checked]="checked"
    ></mat-checkbox>
  `
})
export class CheckboxComponent {
  @Input() disabled: boolean;
  @Input() checked: boolean;
}
