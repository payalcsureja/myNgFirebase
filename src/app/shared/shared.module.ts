import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
//import { FormsModule }   from '@angular/forms';

import { ScrollToModule } from 'ng2-scroll-to';

@NgModule({
  imports: [
  	CommonModule,
  	//FormsModule,

    // 3rd party modules
    ScrollToModule.forRoot(),
  ],
  exports: [
    CommonModule,
    //FormsModule,
    ScrollToModule
  ],
  declarations: [
  ],
  providers: []
})
export class SharedModule { }