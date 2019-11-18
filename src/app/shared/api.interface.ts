import { Observable } from 'rxjs';

export interface Api {
  readonly url: string;
  fetch(options?: {}): Observable<any>;
}
