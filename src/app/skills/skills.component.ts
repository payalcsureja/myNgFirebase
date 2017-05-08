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
        this.loggerService.message('Skills retrieval completed.');
      });
  }

}