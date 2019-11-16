import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterApi implements Api {
  readonly url: string;
  fetch(options?: {}): Observable<any> {
    return undefined;
  }

  constructor() {}
}
