
import {Injectable} from "@angular/core";
import {Meeting, Client} from "../meeting.model";
import {DataSource} from "../static.datasource";


@Injectable()
export class Model {
  // private dataSource: DataSource;
  private meetings: Meeting[];
  private clients:Client[];
  private locator = (m: Meeting|Client, id:number|any) => m.id == id;

  constructor(private dataSource: DataSource)  {
    // this.dataSource = new DataSource();
    this.meetings = new Array<Meeting>();
    this.dataSource.getData().forEach(meeting => this.meetings.push(meeting));
    this.clients = new Array<Client>();
    this.dataSource.getClientData().forEach(client => this.clients.push(client));

  }

  getMeetings():Meeting[] {
    return this.meetings;
  }

  getMeeting(id:number): Meeting | undefined {
    return this.meetings.find(m=> this.locator(m, id));
  }


  saveMeeting(meeting:Meeting) {
    if (meeting.id === 0 || meeting.id === null) {
      meeting.id = this.generateID();
      this.meetings.push(meeting);
    } else {
      let index = this.meetings.findIndex(m=>this.locator(m, meeting.id));
      this.meetings.splice(index, 1, meeting);
    }
  }

  deleteMeeting(id:number) {
    let index = this.meetings.findIndex(m=>this.locator(m, id));
    if (index > -1) {
      this.meetings.splice(index,1);
    }
  }

  getClients():Client[] {
    return this.clients;
  }

  getClient(id:number): Client | undefined {
    return this.clients.find(m=> this.locator(m, id));
  }

  saveClient(client:Client) {
    if (client.id === 0 || client.id === null) {
      client.id = this.generateClientID();
      this.clients.push(client);
    } else {
      let index = this.clients.findIndex(m=>this.locator(m, client.id));
      this.clients.splice(index, 1, client);
    }
  }

  deleteClient(id:number) {
    let index = this.clients.findIndex(m=>this.locator(m, id));
    if (index > -1) {
      this.clients.splice(index,1);
    }
  }

  private generateID() {
    let meetingId = 100;
    while (this.getMeeting(meetingId) != null) {
      meetingId ++;
    }
    return meetingId;
  }

  private generateClientID() {
    let clientId = 100;
    while (this.getClient(clientId) != null) {
      clientId ++;
    }
    return clientId;
  }

}
