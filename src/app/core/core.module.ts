import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SpinnerModule } from './spinner/spinner.module';
import { ToastModule } from './toast/toast.module';

import { LoggerService } from './logger.service';
import { ExceptionService } from './exception.service';
import { throwIfAlreadyLoaded } from './module-import-guard';

// import * as $ from 'jquery';

@NgModule({
  imports: [
    SpinnerModule,
    ToastModule
  ],
  exports: [
    SpinnerModule,
    ToastModule
  ],
  // declarations: [],
  providers: [
    LoggerService,
    ExceptionService
  ]
})

export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}