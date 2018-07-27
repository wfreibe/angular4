import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers, Http } from '@angular/http';
import { Project } from './project';
import { Observable } from 'rxjs/Observable';
import { ProjectFactory } from './project-factory';

@Injectable()
export class ProjectStoreService {
  projects: Project[];
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

  getAll(treePath: string): Observable<Array<Project>> {
    return this.http
      .get(`${this.api}/user/organizations/${treePath}/projects`, { headers: this.headers })
      .retry(3)
      .map(response => response.json())
      .map(rawProjects => rawProjects
        .map(rawProject => ProjectFactory.fromObject(rawProject))
      )
      .catch(this.errorHandler);
  }

  getFirstOrganizationProjects(): Observable<Array<Project>> {
    return this.http
      .get(`${this.api}/user/organizations/first/projects`, { headers: this.headers })
      .retry(3)
      .map(response => response.json())
      .map(rawProjects => rawProjects
        .map(rawProject => ProjectFactory.fromObject(rawProject))
      )
      .catch(this.errorHandler);
  }
}
