import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  excludedUrls: string[] = ['/api/Auth/Login'];
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    
    if (this.isExcluded(request.url)) {
      return next.handle(request);
    }
    const authToken = localStorage.getItem('JwtToken');
    
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
      },
    });    
    return next.handle(authReq);
  }

  private isExcluded(url: string): boolean {
    return this.excludedUrls.some((excludedUrl) => url.includes(excludedUrl));
  }
}
