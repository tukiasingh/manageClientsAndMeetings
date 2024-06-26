import {Component} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";

@Component({
  selector: "msMessages",
  templateUrl: "message.component.html",
})

export class MessageComponent {
  lastMessage?: Message;
  constructor(messageService: MessageService) {
    messageService.messages.subscribe(msg => this.lastMessage = msg);
  }
}
