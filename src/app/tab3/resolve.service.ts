import { Injectable } from '@angular/core';
import { StorageService } from '../shared/storage.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ResolveApi } from './resolve.api';

@Injectable({
  providedIn: 'root'
})
export class ResolveService {
  constructor(
    private storageService: StorageService,
    private resolveApi: ResolveApi
  ) {}

  public resolveForStoredDid(): Observable<any> {
    return this.storageService.getIdentifier().pipe(
      switchMap((identifier: string) => {
        console.log('###did service', identifier);
        return this.resolveApi.fetch({ identifier });
      })
    );
  }
}
