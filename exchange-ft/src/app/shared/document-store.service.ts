import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers, Http } from '@angular/http';
import { Document } from './document';
import { DocumentFactory} from './document-factory';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DocumentStoreService {

  documents: Document[];
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

  getAll(friendlyURL: string): Observable<Array<Document>> {
    return this.http
      .get(`${this.api}/user/organization/projects${friendlyURL}/documents`, { headers: this.headers })
      .retry(3)
      .map(response => response.json())
      .map(rawDocuments => rawDocuments
        .map(rawDocument => DocumentFactory.fromObject(rawDocument))
      )
      .catch(this.errorHandler);
  }

  getFirstOrganizationProjectDocuments(): Observable<Array<Document>> {
    return this.http
      .get(`${this.api}/user/organization/projects/first/documents`, { headers: this.headers })
      .retry(3)
      .map(response => response.json())
      .map(rawDocuments => rawDocuments
        .map(rawDocument => DocumentFactory.fromObject(rawDocument))
      )
      .catch(this.errorHandler);
  }
}
