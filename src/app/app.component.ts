import { Component, VERSION, OnInit, ViewChild } from "@angular/core";
import {Column} from "./generic-table/column.model";
import { ShiftProgressComponent } from "./generic-table/cells/shift-progress.component";
import { CheckboxComponent } from "./generic-table/cells/checkbox.component";
import { GenericTableComponent } from "./generic-table/generic-table.component";
import { ShiftTransformer } from "./transformers/shift.transformer";
import { Shift } from "./models/shift.model";
import { Button } from "./generic-table/button.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild('genericTable') table: GenericTableComponent<Shift>;
  shiftTransformer = new ShiftTransformer;

  columnsToDisplay = [
    new Column("ID","shiftId"),
    new Column("Name", "shiftName"),
    new Column("Progress", "shiftProgress", ShiftProgressComponent)
  ];

  buttonActions = [
    new Button("Add", null, this.onAddClick),
    new Button("Edit", null, this.onEditClick)
  ];

  onEditClick(event, shift: Shift, index: number) {
    console.log(event, shift);
  }

  onAddClick(event, shift: Shift, index: number) {
    console.log(event, shift);
  }
}

