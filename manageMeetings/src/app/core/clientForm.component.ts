import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Client} from "../meeting.model";
import { Model } from "../model/repository.model"

@Component({
  selector: "clForm",
  templateUrl: "clientForm.component.html",
  styleUrls: ["form.component.css"]
})
export class ClientFormComponent {
  client: Client = new Client();

  constructor(private model: Model) {}


  submitClientForm(form: NgForm) {
    if (form.valid) {
      this.model.saveClient(this.client);
      this.client = new Client();
      form.resetForm();
    }
  }
}
