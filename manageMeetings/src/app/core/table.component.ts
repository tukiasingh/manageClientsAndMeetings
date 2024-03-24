import { Component } from "@angular/core";
import {Meeting} from "../meeting.model";
import { Model } from "../model/repository.model";
import { MODES, SharedState } from "./sharedState.service";

@Component({
  selector: "msTable",
  templateUrl: "table.component.html"
})
export class TableComponent {

  constructor(private model: Model, private state: SharedState) { }

  getMeeting(key: number): Meeting | undefined {
    return this.model.getMeeting(key);
  }

  getMeetings(): Meeting[] {
    return this.model.getMeetings();
  }

  deleteMeeting(key?: number) {
    if (key != undefined) {
      this.model.deleteMeeting(key);
    }
  }

  editMeeting(key?: number) {
    this.state.update(MODES.EDIT, key)
  }

  createMeeting() {
    this.state.update(MODES.CREATE);
  }
}
