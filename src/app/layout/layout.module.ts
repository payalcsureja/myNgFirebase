import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    SharedModule
  ],
  declarations: [HeaderComponent, FooterComponent, NavbarComponent],
})
export class LayoutModule { }