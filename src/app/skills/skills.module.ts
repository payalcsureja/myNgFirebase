import { NgModule } from '@angular/core';

import { SkillsComponent } from './skills.component';

// import { routedComponents, SkillsRoutingModule } from './skills-routing.module';

// import { SharedModule } from '../shared/shared.module';
// import { SkillService } from './shared/skill.service';

@NgModule({
  // imports: [SharedModule, SkillsRoutingModule],
  exports: [
    // CommonModule, FormsModule, RouterModule,
    [SkillsComponent]
  ],
  declarations: [SkillsComponent], //, routedComponents
  // providers: [SkillService]
})
export class SkillsModule { }
// avoids having to lazy load with loadChildren: "app/skills/skill.module#SkillModule"

