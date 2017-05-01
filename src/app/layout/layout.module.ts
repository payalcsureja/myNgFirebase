import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  exports: [
    [HeaderComponent, FooterComponent, NavbarComponent]
  ],
  declarations: [HeaderComponent, FooterComponent, NavbarComponent],
})
export class LayoutModule { }