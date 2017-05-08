import { Injectable } from '@angular/core';

import { ToastService } from './toast/toast.service';

@Injectable()
export class LoggerService {

	constructor(private toastService: ToastService) { }

	log(msg: string) {
    console.log(msg);
  }

  message(msg: string) {
    this.toastService.activate(`${msg}`);
  }

  // error(msg: string) {
  // }
}