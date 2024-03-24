import {NgModule} from "@angular/core";
import {DataSource} from "../static.datasource";
import {Model} from "./repository.model";

@NgModule({
  providers: [Model, DataSource]
})

export class ModelModule {}
