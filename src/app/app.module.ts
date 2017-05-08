import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import './core/rxjs-extensions';
// import { ScrollToModule } from 'ng2-scroll-to';

import { CoreModule } from './core/core.module';
// import { environment } from '../environments/environment';

import { LayoutModule } from './layout/layout.module';
// import { AboutModule } from './about/about.module';
// import { SkillsModule } from './skills/skills.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    HttpModule,

    // 3rd party modules
    // ScrollToModule.forRoot(),

    // LoginModule,
    // Routes get loaded in order. It is important that login
    // come before AppRoutingModule, as
    // AppRoutingModule defines the catch-all ** route
    AppRoutingModule,

    // Custom shared modules
    CoreModule,

    // App modules
    LayoutModule,
    // AboutModule,
    // SkillsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }