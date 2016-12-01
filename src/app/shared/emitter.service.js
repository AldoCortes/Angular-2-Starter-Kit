import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmitterService {
  actionUrl: string = 'http://ragoo.mx/services/contact';
  constructor(_http: Http) {
    this._http = _http;
  }

  addContact(name:string, email:string, message:string) {
    const body = JSON.stringify({name, email, message});
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const options = new RequestOptions({headers, method: "post"});
    return this._http.post(this.actionUrl, body, options)
        .map(res => res.json())
        .catch(this.handleError);
  }
  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || ' error');
  }
}
