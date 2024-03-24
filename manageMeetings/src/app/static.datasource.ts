import {Injectable} from "@angular/core";
import {Meeting} from "./meeting.model";
import {Client} from "./meeting.model";

@Injectable()
export class DataSource {
  private data: Meeting[];
  private clientData: Client[];
  constructor() {
    this.data = new Array<Meeting> (
      new Meeting (
        "Discuss Project1 Requirements",
        5,
        "Terry Medhurst ",
        "2024-03-25T08:00",
        1,
        1),
      new Meeting (
        "Discuss Project1 Feature List",
        10,
        "Terry Medhurst",
        "2024-04-25T10:00",
        1,
        2,),
      new Meeting (
        "Discuss Project2 Requirements",
        7,
        "Sheldon Quigley",
        "2024-03-30T10:00",
        2,
        3),
      new Meeting (
        "Discuss Project2 FeatureList",
        4,
        "Sheldon Quigley",
        "2024-04-15T10:00 ",
        2,
        4),
      new Meeting (
        "Discuss Project Expectations and Timeline",
        5,
        "Terrill Hills",
        "2024-04-19T10:00",
        3,
        5)
    );
    this.clientData = new Array<Client> (
      new Client(1,
        "Terry Medhurst",
        "atuny0@sohu.com",
        "9uQFF1Lh",
        "1745 T Street Southeast, Washington, DC"),
      new Client(2,
        "Sheldon Quigley",
        "hbingley1@plala.or.jp",
        "OWsTbMUgFc",
        "560 Penstock Drive, Grass Valley, CA"),
      new Client(3,
        "Terrill Hills",
        "rshawe2@51.la",
        "OWsTbMUgFc",
        "560 Penstock Drive, Grass Valley, CA")
    );
  }

  getData(): Meeting[] {
    return this.data;
  }

  getClientData(): Client[] {
    return this.clientData;
  }


}
