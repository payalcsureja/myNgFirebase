import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { SkillsModule } from '../skills/skills.module';
import { AboutRoutingModule, routedComponents } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
	imports: [
    SharedModule,
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