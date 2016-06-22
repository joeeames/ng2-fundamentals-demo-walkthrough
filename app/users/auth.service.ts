import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export interface User {
  id: number,
  firstName: string,
  lastName: string,
  userName: string
}

@Injectable()
export class AuthService {
  currentUser: User;
  
  constructor(private http: Http) {}
  
  loginUser(userName: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers });
    let loginInfo = {username: userName, password: password};

    return this.http.post('/api/login',
      JSON.stringify(loginInfo), 
      options
    )
    .do((resp:any) =>{
      if(resp) {
        this.currentUser = <User>resp.json().user;
      }
    })
    .catch((error:Response) => {
      return Observable.of(false);
    })
  }
  
  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError)
      .subscribe((currentUser:any) => {
        if(!!currentUser.userName) {
          this.currentUser = currentUser;
        }
      })
  }

  updateCurrentUser(firstName: string, lastName: string) {
    console.log('updating', firstName, lastName);
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
  
  private handleError(error: Response) {
    return Observable.throw(error.json().error || "Server Error");
  }
}
