export class Meeting {
  constructor(public meetingTopic?:string, public peopleCount?:number,
              public meetingStartTime?:String, public client?:string,
              public clientId?:number|any, public id?:number|any) {}
}

export class Client {
  constructor(public id?:number|any, public name?:string, public email?:string, public password?:string|number,
              public address?:string,public repeatedPassword?:string|number)  {}
}
