import { Injectable } from '@angular/core';

import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: '1',
      username: 'jimenez77'
    }
  ];

  loggedUser: User|null = null;

  constructor() { }

  logInUser() {
    this.loggedUser = this.users[0];
  }

  logOutUser() {
    this.loggedUser = null;
  }

  getLoggedUser(): User|null {
    return this.loggedUser;
  }

  isLoggedIn(): boolean {
    return this.loggedUser ? true : false;
  }

}
