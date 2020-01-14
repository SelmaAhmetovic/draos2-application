import { Injectable } from '@angular/core';
import {Role, Skill} from '../../shared/models';
import {BehaviorSubject} from 'rxjs';
import {Logs} from "../../shared/models/logs";
import {User} from "../../shared/models/user";

@Injectable()
export class SkillsDataService {
  skills: any;
  logs: any;
  user: any;
  constructor() {
    this.skills = new BehaviorSubject<Skill>(JSON.parse(localStorage.getItem('skills')));
    this.logs = new BehaviorSubject<Logs>(JSON.parse(localStorage.getItem('logs')));
    this.user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

  }
  getData() {
    return this.skills._value;
  }

  getCategory(skill: any) {
    let filtered = this.skills._value;
    filtered = filtered.filter( el => el.skillTitle === skill );
    return filtered[0].skillCategory;
  }

  deleteItem(skillId) {
    for (let i = 0; i < this.skills._value.length; i++) {
      let role = this.skills._value[i];
      if (parseInt(this.skills._value[i].id) === skillId) {
        // delete skill

        const log = new Logs();
        log.id = this.logs._value.length + 1;
        log.username = this.user.value.username;
        log.log = "DELETED SKILL"+ JSON.stringify(this.skills._value[i]);
        let dateTime = new Date();
        log.dateAndTime = dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString();
        this.logs._value.push(log);
        localStorage.setItem('logs', JSON.stringify(this.logs._value));

        this.skills._value.splice(i, 1);
        localStorage.setItem('skills', JSON.stringify(this.skills._value));
        break;
      }
    }
  }

  addItem(skillTitle: string, skillCategory: string, skillDescription: string) {
    const newSkill = new Skill();
    newSkill.id = this.skills._value.length + 1;
    newSkill.skillTitle = skillTitle;
    newSkill.skillCategory = skillCategory;
    newSkill.skillDescription = skillDescription;
    this.skills._value.push(newSkill);

    const log = new Logs();
    log.id = this.logs._value.length + 1;
    log.username = this.user.value.username;
    log.log = "ADDED SKILL"+ JSON.stringify(newSkill);
    let dateTime = new Date();
    log.dateAndTime = dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString();
    this.logs._value.push(log);
    localStorage.setItem('logs', JSON.stringify(this.logs._value));

    localStorage.setItem('skills', JSON.stringify(this.skills._value));
  }


}
