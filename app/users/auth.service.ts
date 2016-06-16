import { Injectable } from '@angular/core';

export interface User {
  id: number,
  firstName: string,
  lastName: string,
  userName: string
}

@Injectable()
export class AuthService {
  currentUser: User;
  
  constructor() {}
  
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: "johnpapa",
      firstName: "John",
      lastName: "Papa"
    }
  }
  
  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
