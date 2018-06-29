import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User, Thumbnail } from './user';
import { UserFactory } from './user-factory';

import { environment } from '../../environments/environment';

@Injectable()
export class UserStoreService {
  users: User[];
  private api = environment.apiEndpoint;
  // https://stackoverflow.com/questions/38286250/exception-response-with-status-0-for-url-null-in-angular2

  private headers: Headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
    // this.headers.append(environment.authorizationkey, environment.authorizationvalue);
    this.headers.append(environment.authorizationkey, localStorage.getItem('access_token'));
  }

  private errorHandler(error: Error | any): Observable<any> {
    // alert(error);
    return Observable.throw(error);
  }

  getAll(): Observable<Array<User>> {
    // debugger
    return this.http
      .get(`${this.api}/users`, { headers: this.headers })
      .retry(3)
      .map(response => response.json())
      .map(rawUsers => rawUsers
        .map(rawUser => UserFactory.fromObject(rawUser))
      )
      .catch(this.errorHandler);
  }

  getOrgUsers(orgId: string): Observable<Array<User>> {
    return this.http
      .get(`${this.api}/organizations/${orgId}/users`, { headers: this.headers })
      .retry(3)
      .map(response => response.json())
      .map(rawUsers => rawUsers
        .map(rawUser => UserFactory.fromObject(rawUser))
      )
      .catch(this.errorHandler);
  }

  getAllSearch(searchTerm: string): Observable<Array<User>> {
    // debugger
    return this.http
      .get(`${this.api}/users/search/${searchTerm}`, { headers: this.headers })
      .retry(3)
      .map(response => response.json())
      .map(rawUsers => rawUsers
        .map(rawUser => UserFactory.fromObject(rawUser))
      )
      .catch(this.errorHandler);
  }

  create(user: User): Observable<any> {
    return this.http
      .post(`${this.api}/users`, JSON.stringify(user), { headers: this.headers })
      .catch(this.errorHandler);
  }

  update(user: User): Observable<any> {
    return this.http
      .put(`${this.api}/users/${user.userId}`, JSON.stringify(user), { headers: this.headers })
      .catch(this.errorHandler);
  }

  remove(userId: string): Observable<any> {
    // console.log(userId);
    return this.http
      .delete(`${this.api}/users/${userId}`, { headers: this.headers })
      .catch(this.errorHandler);
  }

  getSingle(userId: string): Observable<User> {
    // debugger
    return this.http
      .get(`${this.api}/users/${userId}`, { headers: this.headers })
      .retry(3)
      .map(response => response.json())
      .map(rawUser => UserFactory.fromObject(rawUser))
      .catch(this.errorHandler);
  }

  check(email: string): Observable<Boolean> {
    // debugger
    return this.http
      .get(`${this.api}/users/${email}/check`, { headers: this.headers })
      .map(response => response.json())
      .catch(this.errorHandler);
  }

  /*
  getAll() {
    return this.users;
  }
  */
  /*
  getSingle(userId) {
    // use the parseInt or parseFloat functions, or simply use the unary + operator
    return this.users.find(user => user.userId === +userId);
  }*/
}
