import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Training} from "../../shared/models/training";
import {SkillsDataService} from "../skills-page/skillsData.service";
import {Role} from "../../shared/models";
import {Logs} from "../../shared/models/logs";
import {User} from "../../shared/models/user";

@Injectable()
export class TrainingDataService {
  trainings: any;
  skills: any;
  logs: any;
  user: any;

  constructor() {
    this.trainings = new BehaviorSubject<Training>(JSON.parse(localStorage.getItem('trainings')));
    this.skills = new BehaviorSubject<Role>(JSON.parse(localStorage.getItem('skills')));
    this.logs = new BehaviorSubject<Logs>(JSON.parse(localStorage.getItem('logs')));
    this.user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

  }

  getSkills(){
    return this.skills._value;
  }

  getData() {
    return this.trainings._value;
  }

  deleteItem(trainingId) {
    for (let i = 0; i < this.trainings._value.length; i++) {
      let role = this.trainings._value[i];
      if (parseInt(this.trainings._value[i].id) === trainingId) {
        // delete training
        const log = new Logs();
        log.id = this.logs._value.length + 1;
        log.username = this.user.value.username;
        log.log = "DELETED TRAINING"+ JSON.stringify(this.trainings._value[i]);
        let dateTime = new Date();
        log.dateAndTime = dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString();
        this.logs._value.push(log);
        localStorage.setItem('logs', JSON.stringify(this.logs._value));

        this.trainings._value.splice(i, 1);
        localStorage.setItem('trainings', JSON.stringify(this.trainings._value));
        break;
      }
    }
  }

  addItem(trainingTitle: string, trainingDescription: string, trainingSkill: string) {
    const newTraining = new Training();
    newTraining.id = this.trainings._value.length + 1;
    newTraining.trainingTitle = trainingTitle;
    newTraining.trainingDescription = trainingDescription;
    newTraining.trainingSkill = trainingSkill;
    this.trainings._value.push(newTraining);

    const log = new Logs();
    log.id = this.logs._value.length + 1;
    log.username = this.user.value.username;
    log.log = "ADDED TRAINING"+ JSON.stringify(newTraining);
    let dateTime = new Date();
    log.dateAndTime = dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString();
    this.logs._value.push(log);
    localStorage.setItem('logs', JSON.stringify(this.logs._value));

    localStorage.setItem('trainings', JSON.stringify(this.trainings._value));
  }


}
