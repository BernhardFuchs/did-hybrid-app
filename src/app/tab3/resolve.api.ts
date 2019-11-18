import { Injectable } from '@angular/core';
import { Api } from '../shared/api.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResolveApi implements Api {
  readonly url: string = 'https://uniresolver.io/1.0/identifiers/';

  fetch(options?: { identifier }): Observable<any> {
    return this.http.get(`${this.url}${options.identifier}`);
  }

  constructor(private http: HttpClient) {}
}
