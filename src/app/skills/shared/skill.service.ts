import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Skill } from './skill.model';
import { ExceptionService } from '../../core';

let skillsUrl = 'assets/api/skills.json';

@Injectable()
export class SkillService {

  constructor(private http: Http,
    private exceptionService: ExceptionService) {
  }

  getSkills() {

    return <Observable<Skill[]>>this.http
      .get(skillsUrl)
      .map(res => this.extractData<Skill[]>(res))
      // .do(data => console.log(data))
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => {});
  }

  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return <T>(body && body.data || {});
  }

}