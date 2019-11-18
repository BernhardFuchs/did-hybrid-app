import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Api } from '../shared/api.interface';
import * as data from '../../assets/register-test-response.json';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterMockApi implements Api {
  readonly url: string = '../assets/example.response.json';

  fetch(options?: {}): Observable<any> {
    // tslint:disable-next-line:no-shadowed-variable
    return this.wrapData().pipe(map(data => data.default));
  }
  constructor() {}

  private wrapData(): Observable<any> {
    return of(data);
  }
}
