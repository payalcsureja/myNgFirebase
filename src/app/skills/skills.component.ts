import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../core';

import { Skill } from './shared/skill.model';
import { SkillService } from './shared/skill.service';

@Component({
	// moduleId: module.id,
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {

	skills: Skill[];

  constructor(
    private loggerService: LoggerService,
    private skillService: SkillService) { }

  ngOnInit() {
  	this.getSkills();
  }

  getSkills() {
    this.skills = [];
    this.skillService.getSkills()
      .subscribe(skills => {
        this.skills = skills;
      },
      error => {
        this.loggerService.log('error occurred here');
        this.loggerService.log(error);
      },
       () => {
        // this.loggerService.log('skill retrieval completed');
      });
  }

}


// import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import { Subscription } from 'rxjs/Subscription';

// import { FilterTextComponent } from '../../shared/filter-text/filter-text.component';
// import { FilterTextService } from '../../shared/filter-text/filter-text.service';
// import { Skill } from '../shared/skill.model';
// import { SkillService } from '../shared/skill.service';

// @Component({
//   moduleId: module.id,
//   selector: 'story-skill-list',
//    templateUrl: './skill-list.component.html',
//   styleUrls: ['./skill-list.component.css']
// })
// export class SkillListComponent implements OnDestroy, OnInit {
//   private dbResetSubscription: Subscription;

//   skills: Skill[];
//   filteredSkills = this.skills;
//   @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;

//   constructor(
//     private filterService: FilterTextService,
//     private skillService: SkillService) { }

//   filterChanged(searchText: string) {
//     this.filteredSkills = this.filterService.filter(searchText, ['id', 'name', 'type'], this.skills);
//   }

//   getSkills() {
//     this.skills = [];
//     this.skillService.getSkills()
//       .subscribe(skills => {
//         this.skills = this.filteredSkills = skills;
//         this.filterComponent.clear();
//       },
//       error => {
//         console.log('error occurred here');
//         console.log(error);
//       },
//        () => {
//         console.log('skill retrieval completed');
//       });
//   }

//   ngOnDestroy() {
//     this.dbResetSubscription.unsubscribe();
//   }

//   ngOnInit() {
//     componentHandler.upgradeDom();
//     this.getSkills();
//     this.dbResetSubscription = this.skillService.onDbReset
//       .subscribe(() => this.getSkills());
//   }

//   trackBySkills(index: number, skill: Skill) {
//     return skill.id;
//   }
// }
