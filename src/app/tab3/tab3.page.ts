import { Component } from '@angular/core';
import { ResolveService } from './resolve.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private resolveService: ResolveService) {}

  public resolve() {
    this.resolveService
      .resolveForStoredDid()
      .subscribe(id => console.log('Did Document', id));
  }
}
