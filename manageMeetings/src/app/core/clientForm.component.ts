import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Client} from "../meeting.model";
import { Model } from "../model/repository.model"
import { Message  } from "../messages/message.model"
import { MessageService } from "../messages/message.service";
import { MODES, SharedState, StateUpdate } from "./sharedState.service";

@Component({
  selector: "clForm",
  templateUrl: "clientForm.component.html",
  styleUrls: ["form.component.css"]
})
export class ClientFormComponent {
  client: Client = new Client();
  editing: boolean = false;

  constructor(private model: Model, private state: SharedState,
              private messageService: MessageService) {
    this.state.changes.subscribe((upd) => this.handleStateChange(upd))
    this.messageService.reportMessage(new Message("Clients Meeting Scheduler"));
  }

  handleStateChange(newState: StateUpdate) {
    this.editing = newState.mode == MODES.EDIT;
    if (this.editing && newState.id) {
      Object.assign(this.client, this.model.getClient(newState.id)
        ?? new Client());
      this.messageService.reportMessage(
        new Message(`Editing ${this.client.name}`));
    } else {
      this.client = new Client();
      this.messageService.reportMessage(new Message("Creating New Client"));
    }
  }

  submitClientForm(form: NgForm) {
    if (form.valid) {
      this.model.saveClient(this.client);
      this.client = new Client();
      form.resetForm();
    }
  }
}






// import {Component, Output, EventEmitter} from "@angular/core";
// import {Client} from "../meeting.model";
//
// @Component({
//   selector: "clRegisterForm",
//   templateUrl: "clientForm.component.html"
// })
//
// // export class ClientFormComponent {}
//
// export class ClientFormComponent {
//   newClient: Client = new Client();
//
//   @Output("clNewClient")
//   newClientEvent = new EventEmitter<Client>();
//
//   submitForm (form: any) {
//     this.newClientEvent.emit(this.newClient);
//     this.newClient = new Client();
//     form.resetForm();
//   }
//
// }
