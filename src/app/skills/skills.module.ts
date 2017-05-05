import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
// import { routedComponents, SkillsRoutingModule } from './skills-routing.module';

import { SkillsComponent } from './skills.component';
import { SkillService } from './shared/skill.service';

@NgModule({
  imports: [
  	SharedModule
    //SkillsRoutingModule
  ],
  exports: [
    SkillsComponent
  ],
  declarations: [
    SkillsComponent
    // routedComponents
  ],
  providers: [
    SkillService
  ]
})
export class SkillsModule { }
// avoids having to lazy load with loadChildren: "app/skills/skill.module#SkillModule"