import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs/Subject';

// import * as toastr from 'toastr';

export interface ToastMessage {
  message: string;
}

@Injectable()
export class ToastService {
  private toastSubject = new Subject<ToastMessage>();

  toastState = this.toastSubject.asObservable();

  constructor(@Optional() @SkipSelf() prior: ToastService) {
    if (prior) {
      // console.log('toast service already exists');
      // toastr.error('toast service already exists', 'Inconceivable!');
      return prior;
    } else {
      // console.log('created toast service')
      // toastr.error('created toast service', 'Inconceivable!');
    }
  }

  activate(message?: string) {
    this.toastSubject.next(<ToastMessage>{ message: message });
  }
}
