import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScrollToModule } from 'ng2-scroll-to';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  exports: [
    [HeaderComponent, FooterComponent, NavbarComponent]
  ],
  imports: [
  	RouterModule,
    // 3rd party modules
    ScrollToModule.forRoot(),

    SharedModule
  ],
  declarations: [HeaderComponent, FooterComponent, NavbarComponent],
})
export class LayoutModule { }