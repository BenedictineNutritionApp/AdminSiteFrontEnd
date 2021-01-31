import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:8080/api/users/login';


  constructor(private http: HttpClient, private userService: UserService) {
  }

  // public doLogin(userLogin) {
  //   return this.http.post(`${this.loginUrl}`, userLogin,  {responseType: 'text' as 'json'});
  // }
  //
  // setSessionUser(username) {
  //   sessionStorage.setItem('username', username);
  //   return true;
  // }
  //
  // isUserLoggedIn() {
  //   const user = sessionStorage.getItem('username');
  //   console.log(!(user === null));
  //   return !(user === null);
  // }
  //
  // logOut() {
  //   sessionStorage.removeItem('username');
  // }
}
