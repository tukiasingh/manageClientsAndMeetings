import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TableComponent } from "./table.component";
import { FormComponent } from "./form.component";
import { SharedState } from "./sharedState.service";
import {ClientFormComponent} from "./clientForm.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule],
  declarations: [TableComponent, FormComponent, ClientFormComponent],
  exports: [ModelModule, TableComponent, FormComponent, ClientFormComponent],
  providers: [SharedState]
})
export class CoreModule { }
