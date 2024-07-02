import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { NotificationsService } from '../services/notifications.service';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  baseUrlBackend = environment.URL_BACKEND;
  constructor(private notifService: NotificationsService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.includes(this.baseUrlBackend)) {
      this.notifService.onLoading(true);
    }
    return next.handle(request).pipe(
      finalize( () => {
        this.notifService.loadingEvent.next(false);
      })
    );
  }
}
