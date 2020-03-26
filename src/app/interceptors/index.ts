import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CustomLogInterceptorService} from './custom-log-interceptor.service';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: CustomLogInterceptorService, multi: true }
];
