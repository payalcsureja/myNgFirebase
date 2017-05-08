import { NgModule } from '@angular/core';

import { SkillsModule } from '../skills/skills.module';
import { AboutRoutingModule, routedComponents } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
	imports: [
  	AboutRoutingModule,
    SkillsModule
  ],
  exports: [
    [AboutComponent]
  ],
  declarations: [
  	AboutComponent,
  	routedComponents
  ]
})
export class AboutModule { }