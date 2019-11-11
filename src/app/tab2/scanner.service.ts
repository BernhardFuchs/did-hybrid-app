import { Injectable } from '@angular/core';

import {
  BarcodeScanner,
  BarcodeScannerOptions,
  BarcodeScanResult
} from '@ionic-native/barcode-scanner/ngx';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {
  private options: BarcodeScannerOptions = {
    showFlipCameraButton: true,
    showTorchButton: true,
    torchOn: false,
    prompt: 'Place a barcode inside the scan area',
    disableSuccessBeep: true
  };

  constructor(private barcodeScanner: BarcodeScanner) {}

  public getText(): Observable<string> {
    return fromPromise(this.scanBarcodePlugin()).pipe(
      map((result: BarcodeScanResult) => result.text)
    );
  }

  private async scanBarcodePlugin(): Promise<BarcodeScanResult> {
    return await this.barcodeScanner
      .scan(this.options)
      .then((result: BarcodeScanResult) => result);
  }
}
