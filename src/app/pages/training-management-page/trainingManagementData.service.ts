import { Injectable } from '@angular/core';
import {SkillsDataService} from "../skills-page/skillsData.service";
import {BehaviorSubject} from "rxjs";
import {Role, Training} from "../../shared/models";
import {TrainingManagement} from "../../shared/models/trainingManagement";
import {Logs} from "../../shared/models/logs";
import {User} from "../../shared/models/user";

@Injectable()
export class TrainingManagementDataService {
  trainings: any;
  trainingsManagement: any;

  users: any;
  skills: any;
  skillsTableData: any;
  logs: any;
  user: any;

  constructor(private skillsDataService: SkillsDataService) {
    this.users = new BehaviorSubject<Role>(JSON.parse(localStorage.getItem('users')));
    this.skills = new BehaviorSubject<Role>(JSON.parse(localStorage.getItem('skills')));
    this.skillsTableData = new BehaviorSubject<Role>(JSON.parse(localStorage.getItem('skillManagement')));
    this.trainings = new BehaviorSubject<Training>(JSON.parse(localStorage.getItem('trainings')));
    this.trainingsManagement = new BehaviorSubject<TrainingManagement>(JSON.parse(localStorage.getItem('trainingManagement')));
    this.logs = new BehaviorSubject<Logs>(JSON.parse(localStorage.getItem('logs')));
    this.user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

  }

  getTrainings() {
    return this.trainings._value;
  }

  getUsers() {
    return this.users._value;
  }

  addTraining(userName, trainingTitle, trainingSkill) {
    const newTraining = new TrainingManagement();
    newTraining.id = (this.trainingsManagement._value.length + 1).toString();
    newTraining.userName = userName;
    newTraining.trainingTitle = trainingTitle;
    newTraining.trainingSkill = trainingSkill;
    newTraining.completed = false;
    this.trainingsManagement._value.push(newTraining);

    const log = new Logs();
    log.id = this.logs._value.length + 1;
    log.username = this.user.value.username;
    log.log = "ADDED TRAINING TO USER"+ JSON.stringify(newTraining);
    let dateTime = new Date();
    log.dateAndTime = dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString();
    this.logs._value.push(log);
    localStorage.setItem('logs', JSON.stringify(this.logs._value));

    localStorage.setItem('trainingManagement', JSON.stringify(this.trainingsManagement._value));

  }
}
