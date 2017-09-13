import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Skill } from './skill.model';
import { ExceptionService, SpinnerService } from '../../core';

import { UtilsService } from '../../shared/utils.service';

@Injectable()
export class SkillService {

  constructor(private http: Http,
    private exceptionService: ExceptionService,
    private spinnerService: SpinnerService) {
  }

  getSkills() {
    // const skillsUrl = this.utilsService.getRestUrl() + 'skills'; // doesn't work with static getRestUrl
    const skillsUrl = UtilsService.getRestUrl() + 'skills';
    this.spinnerService.show();
    return <Observable<Skill[]>>this.http
      .get(skillsUrl)
      .map(res => this.extractData<Skill[]>(res))
      .do(data => console.log(data))
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
  }

  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return <T>(body && body.data || {});
  }

}