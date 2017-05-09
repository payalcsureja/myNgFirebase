import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../../core';

import { Skill } from '../shared/skill.model';
import { SkillService } from '../shared/skill.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.less']
})
export class SkillListComponent implements OnInit {

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
        // this.loggerService.message('Skills retrieval completed.');
      });
  }

}