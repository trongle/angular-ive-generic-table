import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "shift-progress",
  template: `<mat-chip-list>
              <mat-chip *ngIf="show()" selected style="color: white;" [style.backgroundColor]="getColor()">
                {{ displayProgress() }}
              </mat-chip>
            </mat-chip-list>`
})
export class ShiftProgressComponent implements OnInit {
  @Input() value: string;
  constructor() { }

  ngOnInit() { }

  getColor() {
    switch (this.value.toLowerCase()) {
      case 'completed':
        return "#00BFA5";
      case 'pending':
        return "#C0CA33";
      case 'happening':
        return "#2962FF";

      default:
        return "";
    }
  }

  displayProgress() {
    return this.value;
  }

  show() {
    return this.value != '';
  }
}
