import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Api } from './api.interface';
import * as data from '../assets/example-response.json';

@Injectable({
  providedIn: 'root'
})
export class RegisterMockApi implements Api {
  readonly url: string = '../assets/example.response.json';

  fetch(options?: {}): Observable<any> {
    return of(data);
  }
  constructor() {}
}
