import { Injectable } from '@angular/core';

@Injectable()
export class Service01Service {

  users:string[];

  constructor() {
    this.users=['Alex', 'Brian', 'Charlie'];
  }

  getUsers(){
    return this.users;
  }
}
