import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Meeting} from "../meeting.model";
import { Model } from "../model/repository.model"
import { Message  } from "../messages/message.model"
import { MessageService } from "../messages/message.service";
import { MODES, SharedState, StateUpdate } from "./sharedState.service";

@Component({
  selector: "paForm",
  templateUrl: "form.component.html",
  styleUrls: ["form.component.css"]
})
export class FormComponent {
  meeting: Meeting = new Meeting();
  editing: boolean = false;

  constructor(private model: Model, private state: SharedState,
              private messageService: MessageService) {
    this.state.changes.subscribe((upd) => this.handleStateChange(upd))
    this.messageService.reportMessage(new Message("Creating New Meeting"));
  }

  handleStateChange(newState: StateUpdate) {
    this.editing = newState.mode == MODES.EDIT;
    if (this.editing && newState.id) {
      Object.assign(this.meeting, this.model.getMeeting(newState.id)
        ?? new Meeting());
      this.messageService.reportMessage(
        new Message(`Editing ${this.meeting.meetingTopic}`));
    } else {
      this.meeting = new Meeting();
      this.messageService.reportMessage(new Message("Creating New Meeting"));
    }
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveMeeting(this.meeting);
      this.meeting = new Meeting();
      form.resetForm();
    }
  }
}
