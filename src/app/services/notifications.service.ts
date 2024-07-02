import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor() {}

  loadingEvent: Subject<boolean> = new Subject<boolean>();

  onLoading(loading: boolean) {
    this.loadingEvent.next(loading);
  }
}
