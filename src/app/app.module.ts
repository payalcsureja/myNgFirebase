import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// import { environment } from '../environments/environment';

import './core/rxjs-extensions';
// import { ScrollToModule } from 'ng2-scroll-to';

import { CoreModule } from './core/core.module';

import { LayoutModule } from './layout/layout.module';
import { AboutModule } from './about/about.module';
// import { SkillsModule } from './skills/skills.module';

import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { AboutComponent } from './about/about.component';
// import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent
    // HeaderComponent,
    // FooterComponent,
    // NavbarComponent,
    // AboutComponent,
    // SkillsComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    HttpModule,

    // 3rd party modules
    // ScrollToModule.forRoot(),

    // Custom shared modules
    CoreModule,

    // App modules
    LayoutModule,
    AboutModule,
    // SkillsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }