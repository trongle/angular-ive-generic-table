import { Component, OnInit, Input } from "@angular/core";
import { TableInterface, Table } from "./table.model";
import { Column } from "./column.model";
import { ShiftProgressComponent } from "./cells/shift-progress.component";
import { ModelTransformer } from "./model-transformer.model";
import { HttpService } from "./http.service";
import { Button } from "./button.model";

@Component({
  selector: "app-generic-table",
  templateUrl: "./generic-table.component.html",
  styleUrls: ["./generic-table.component.css"]
})
export class GenericTableComponent<T> implements OnInit {
  private _columns: Column[];
  private _buttons: Button[];

  table: Table<T> = new Table([], this.httpService);

  constructor(private httpService: HttpService){}

  ngOnInit() {
    this.table.fetchSource();
  }

  @Input()
  set columns(columns: Column[]) {
    this._columns = columns;
    this.table.addColumns(columns);
    
    //Append action buttons as the last columns.
    this.table.addColumns(new Column('Action'))
  }

  get columns(): Column[] {
    return this._columns;
  }

  @Input()
  set modelTransformer(model: ModelTransformer<T>) {
    this.table.modelTransformer = model;
  }

  get columnsToDisplay() {
    return this.table.columnNames;
  }

  @Input()
  set buttons(buttons: Button[]) {
    this._buttons = buttons;
  }

  get buttons(): Button[] {
    return this._buttons;
  }

  get dataSource() {
    return this.table.dataSource;
  }
}
