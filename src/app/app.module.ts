import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GenericTableModule } from "./generic-table/generic-table.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, GenericTableModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}