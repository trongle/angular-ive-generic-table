import { Injectable } from "@angular/core";
import { ColumnInterface } from "./column.model";
import { DataSource } from "./data.source";
import { ModelTransformer } from "./model-transformer.model";
import { HttpService } from "./http.service";
import { ButtonInterface } from "./button.model";

export interface TableInterface {
  columns: ColumnInterface[];
}

export class Table<T> implements TableInterface {
  private _modelTransformer: ModelTransformer<T> = null;

  columns: ColumnInterface[] = [];
  dataSource: DataSource<T>;

  constructor(columns: ColumnInterface[], private httpService: HttpService) {
    this.columns = columns;
    this.dataSource = new DataSource<T>(this.httpService);
  }

  get columnNames(): string[] {
    return this.columns.map(c => c.name);
  }

  set modelTransformer(value: ModelTransformer<T>) {
    this._modelTransformer = value;
  }

  get modelTransformer(): ModelTransformer<T> {
    return this._modelTransformer;
  }

  getColumnBy(name: string): ColumnInterface | null {
    return this.columns.find(c => c.name == name);
  }

  addColumns(columns: ColumnInterface[] | ColumnInterface) {
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

  removeColumns(columns: ColumnInterface[] | ColumnInterface) {
    const removingColumnNames = Array.isArray(columns)
      ? columns.map(c => c.name.toLowerCase())
      : [columns.name.toLowerCase()];

    this.columns
      .filter(c => removingColumnNames.includes(c.name.toLowerCase()))
      .forEach((c, i) => this.columns.splice(0, 1));
  }

  fetchSource() {
    this.dataSource.fetchAll(this.modelTransformer);
  }
}
