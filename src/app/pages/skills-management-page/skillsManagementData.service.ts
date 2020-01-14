import { Injectable } from '@angular/core';
import {Role, SkillManagement} from "../../shared/models";
import {BehaviorSubject} from "rxjs";
import {SkillsDataService} from "../skills-page/skillsData.service";
import {Logs} from "../../shared/models/logs";
import {User} from "../../shared/models/user";

@Injectable()
export class SkillsManagementDataService {
  users: any;
  skills: any;
  skillsTableData: any;
  logs: any;
  user: any;

  constructor(private skillsDataService: SkillsDataService) {
    this.users = new BehaviorSubject<Role>(JSON.parse(localStorage.getItem('users')));
    this.skills = new BehaviorSubject<Role>(JSON.parse(localStorage.getItem('skills')));
    this.skillsTableData = new BehaviorSubject<Role>(JSON.parse(localStorage.getItem('skillManagement')));
    this.logs = new BehaviorSubject<Logs>(JSON.parse(localStorage.getItem('logs')));
    this.user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

  }
  getData() {
    return this.users._value;
  }

  getSkills(){
    return this.skills._value;
  }
  getSkillManagement(){
    return this.skillsTableData._value;
  }

  filterDataTable(username: any) {
    let filtered = this.skillsTableData._value;
    return filtered.filter( el => el.userName === username );
  }

  addSkill(user: any, skill: any) {
      let newSkillsTableData = new SkillManagement();
      let id = this.skillsTableData._value.length + 1;
      newSkillsTableData.id = id.toString();
      newSkillsTableData.userName = user;
      newSkillsTableData.skillTitle = skill;
      let category = this.skillsDataService.getCategory(skill);
      newSkillsTableData.categoryTitle = category;
      newSkillsTableData.skillLevel = '0';
      this.skillsTableData._value.push(newSkillsTableData);

    const log = new Logs();
    log.id = this.logs._value.length + 1;
    log.username = this.user.value.username;
    log.log = "ADDED SKILL TO USER"+ JSON.stringify(newSkillsTableData);
    let dateTime = new Date();
    log.dateAndTime = dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString();
    this.logs._value.push(log);
    localStorage.setItem('logs', JSON.stringify(this.logs._value));


      localStorage.setItem('skillManagement', JSON.stringify(this.skillsTableData._value));
  }


}
