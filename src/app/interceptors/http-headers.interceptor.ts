import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'c184660709mshe33db0131eb9676p13f72djsna199ed405239',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },

      // 10a3dc39ea6b460ebdd8116c713e999d
      setParams: {
        key: '10a3dc39ea6b460ebdd8116c713e999d',
      }
    });
    return next.handle(req);
  }
}