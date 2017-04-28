import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {

  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
    // this.loggerService.log('Test Core Log');
  }

}
