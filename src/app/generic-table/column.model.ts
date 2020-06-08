import { Component } from "@angular/compiler/src/core";

export interface ColumnInterface {
  name: string;
  key: string;
  dynamicCellComponent: Component;
}

export class Column implements ColumnInterface {
  name;
  key;
  dynamicCellComponent;

  constructor(name, key?, dynamicCellComponent?) {
    this.name = name;
    this.key = key;
    this.dynamicCellComponent = dynamicCellComponent;
  }
}
