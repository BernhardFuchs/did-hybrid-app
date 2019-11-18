import { Injectable } from '@angular/core';
import 'capacitor-secure-storage-plugin';
import { Plugins } from '@capacitor/core';
import { defer, Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
const { SecureStoragePlugin } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly IDENTIFIER_KEY = 'identifier';
  constructor() {}

  public setIdentifier(identifier: string): Observable<boolean> {
    const options = {
      key: this.IDENTIFIER_KEY,
      value: identifier
    };
    return fromPromise(
      SecureStoragePlugin.set(options).then(result => result.value)
    );
  }

  public getIdentifier(): Observable<string> {
    const options = {
      key: this.IDENTIFIER_KEY
    };
    return fromPromise(
      SecureStoragePlugin.get(options).then(result => result.value)
    );
  }
}
