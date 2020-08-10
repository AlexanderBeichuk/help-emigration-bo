import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public get(url: string, api: string = environment.api): Observable<any> {
    return this.httpClient.get(url + api);
  }
  public post(url: string, body: object, api: string = environment.api): Observable<any> {
    return this.httpClient.post(url + api, body)
  }
}
