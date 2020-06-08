import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './generic-table.component';
import { MatTableModule } from "@angular/material/table";
import { MatChipsModule } from '@angular/material/chips';
import { ShiftProgressComponent } from './cells/shift-progress.component';
import { DynamicCellDirective } from './dynamic-cell.directive';
import { CheckboxComponent } from './cells/checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const components = [
  GenericTableComponent,
  ShiftProgressComponent,
  CheckboxComponent
]

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  declarations: [components, DynamicCellDirective],
  exports: [components]
})
export class GenericTableModule {}