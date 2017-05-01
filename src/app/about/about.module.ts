import { NgModule } from '@angular/core';

import { SkillsModule } from '../skills/skills.module';

import { AboutComponent } from './about.component';

@NgModule({
  exports: [
    [AboutComponent]
  ],
  declarations: [
  	AboutComponent
  ],
  imports: [
    SkillsModule
  ],
})
export class AboutModule { }