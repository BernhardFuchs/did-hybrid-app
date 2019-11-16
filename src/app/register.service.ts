import { Injectable } from '@angular/core';
import { RegisterApi } from './register.api';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private body = {
    jobId: null,
    options: { network: 'builder' },
    secret: null,
    addServices: [],
    addPublicKeys: [],
    addAuthentications: []
  };
  constructor(private api: RegisterApi) {}

  public register(url: string) {
    console.log('###Register for url: ', url);
    this.api
      .fetch({ body: this.body })
      .subscribe(result => console.log('###Result', result));
  }
}
