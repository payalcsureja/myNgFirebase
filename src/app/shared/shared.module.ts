import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule }   from '@angular/forms';

import { ScrollToModule } from 'ng2-scroll-to';
// import { environment } from '../../environments/environment';

// import { UtilsService } from './utils.service';

@NgModule({
  imports: [
    CommonModule,
  	// FormsModule,

    // 3rd party modules
    ScrollToModule.forRoot(),
  ],
  exports: [
    CommonModule,
    // FormsModule,
    ScrollToModule
  ],
  declarations: [
  ],
  providers: [
    // UtilsService,
  ]
})
export class SharedModule { }