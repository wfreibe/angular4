import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Organization } from './organization';
import { OrganizationFactory } from './organization-factory';
import { environment } from '../../environments/environment';

@Injectable()
export class OrganizationStoreService {
  organizations: Organization[];
  private api = environment.apiEndpoint;
  private headers: Headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append(environment.authorizationkey, localStorage.getItem('access_token'));
  }

  private errorHandler(error: Error | any): Observable<any> {
    alert(error);
    return Observable.throw(error);
  }

  getAll(): Observable<Array<Organization>> {
    return this.http
        .get(`${this.api}/user/organizations`, { headers: this.headers })
        .retry(3)
        .map(response => response.json())
        .map(rawOrganizations => rawOrganizations
          .map(rawOrganization => OrganizationFactory.fromObject(rawOrganization))
        )
        .catch(this.errorHandler);
  }

  getFirstOrganization(): Observable<Array<Organization>> {
    return this.http
      .get(`${this.api}/user/organizations/first`, { headers: this.headers })
      .retry(3)
      .map(response => response.json())
      .map(rawOrganizations => rawOrganizations
        .map(rawOrganization => OrganizationFactory.fromObject(rawOrganization))
      )
      .catch(this.errorHandler);
  }

  getOrganization(org: string): Observable<Array<Organization>> {
    return this.http
      .get(`${this.api}/user/organizations/${org}`, { headers: this.headers })
      .retry(3)
      .map(response => response.json())
      .map(rawOrganizations => rawOrganizations
        .map(rawOrganization => OrganizationFactory.fromObject(rawOrganization))
      )
      .catch(this.errorHandler);
  }
}
