import { Injectable } from '@angular/core';
import { RegisterApi } from './register.api';
import { switchMap } from 'rxjs/operators';
import { StorageService } from '../shared/storage.service';
import { Observable } from 'rxjs';

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
  constructor(
    private api: RegisterApi,
    private storageService: StorageService
  ) {}

  public register(url: string): Observable<boolean> {
    console.log('Register with url: ', url);
    return this.api
      .fetch({ body: this.body })
      .pipe(
        switchMap(result =>
          this.storageService.setIdentifier(result.didState.identifier)
        )
      );
  }
}
