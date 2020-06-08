import { Component, VERSION, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  data = [
    { id: 1, name: "Trọng", status: "active" },
    { id: 2, name: "Trọng Lê", status: "inActive" }
  ];
  table: Table = new Table([
    new Column("id"),
    new Column("name"),
    new Column("status")
  ]);

  ngOnInit() {
  }

  get columnsToDisplay() {
    return this.table.columnNames;
  }
}

interface TableColumnInterface {
  name: string;
  type: string;
}

class Column implements TableColumnInterface {
  name = "";
  type: string;

  constructor(name, type = "text") {
    this.name = name;
    this.type = type;
  }
}

class Table {
  columns: Column[] = [];

  constructor(columns: Column[] = []) {
    this.columns = columns;
  }

  get columnNames(): string[] {
    return this.columns.map(c => c.name);
  }

  addColumns(columns: Column[] | Column) {
    const existstingColumns = this.columnNames.map(name => name.toLowerCase());

    if (Array.isArray(columns)) {
      columns
        .filter(c => !existstingColumns.includes(c.name.toLowerCase()))
        .forEach((c, i) => this.columns.push(c));
    } else {
      if (!existstingColumns.includes(columns.name.toLowerCase())) {
        this.columns.push(columns);
      }
    }
  }

  removeColumns(columns: Column[] | Column) {
    const removingColumnNames = Array.isArray(columns)
      ? columns.map(c => c.name.toLowerCase())
      : [columns.name.toLowerCase()];

    this.columns
      .filter(c => removingColumnNames.includes(c.name.toLowerCase()))
      .forEach((c, i) => this.columns.splice(0, 1));
  }
}
