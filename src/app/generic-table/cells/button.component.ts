import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-checkbox",
  template: `
    <button mat-menu-item [disabled]="disabled" (click)="click.emit($event)">{{name}}</button>
  `
})
export class ButtonComponent {
  @Output() click: EventEmitter<any> = new EventEmitter;
  @Input() checked: boolean;
  @Input() name: string;
}
