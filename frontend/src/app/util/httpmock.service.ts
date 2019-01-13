import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MOCK_DATA } from '../../mock/data';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MockInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('/hosts')) {
      return of(new HttpResponse({ body: MOCK_DATA.hosts }));
    } else if (req.url.indexOf('/metric') > -1) {
      const hostname = req.body.hostname;
      return of(new HttpResponse({ body: MOCK_DATA['metrics'][hostname] || null })).pipe(
        delay(1000)
      );
    } else {
      return next.handle(req);
    }

  }
}