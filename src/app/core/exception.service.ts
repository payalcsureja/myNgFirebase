import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { LoggerService } from './logger.service';

@Injectable()
export class ExceptionService {
  constructor(private loggerService: LoggerService) { }

  catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    let res = <Response>errorResponse;
    let err = res.json();
    let emsg = err ?
      (err.error ? err.error : JSON.stringify(err)) :
      (res.statusText || 'unknown error');
    this.loggerService.log(`Error - Bad Response - ${emsg}`);
    return Observable.of(false);
  };
}