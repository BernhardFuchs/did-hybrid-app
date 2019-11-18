import { Component, OnDestroy } from '@angular/core';
import { RegisterService } from './register.service';
import { ScannerService } from './scanner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnDestroy {
  private scanSubscription: Subscription;

  constructor(
    private registerService: RegisterService,
    private scannerService: ScannerService
  ) {}

  public scanBarcodePlugin() {
    this.scanSubscription = this.scannerService
      .getText()
      .subscribe((text: string) => this.registerService.register(text));
  }

  public useMockData() {
    this.registerService
      .register('using mock data')
      .subscribe(result => console.log('Was storage successful? ', result));
  }

  ngOnDestroy(): void {
    this.scanSubscription.unsubscribe();
  }
}
