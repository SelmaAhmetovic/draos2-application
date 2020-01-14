import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Role, User} from '../../shared/models';
import {Logs} from "../../shared/models/logs";

@Injectable()
export class RolesDataService {
  roles: any;
  logs: any;
  user: any;
  constructor() {
    this.roles = new BehaviorSubject<Role>(JSON.parse(localStorage.getItem('roles')));
    this.logs = new BehaviorSubject<Logs>(JSON.parse(localStorage.getItem('logs')));
    this.user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }
  getData() {
    return this.roles._value;
  }

  deleteRole(roleId) {
    for (let i = 0; i < this.roles._value.length; i++) {
      let role = this.roles._value[i];
      if (parseInt(this.roles._value[i].id) === roleId) {
        // delete role

        const log = new Logs();
        log.id = this.logs._value.length + 1;
        log.username = this.user.value.username;
        log.log = "DELETED ROLE"+ JSON.stringify(this.roles._value[i]);
        let dateTime = new Date();
        log.dateAndTime = dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString();
        this.logs._value.push(log);
        localStorage.setItem('logs', JSON.stringify(this.logs._value));

        this.roles._value.splice(i, 1);
        localStorage.setItem('roles', JSON.stringify(this.roles._value));
        break;
      }
    }
  }

  addRole(roleTitle: string, roleDescription: string) {
    const newRole = new Role();
    newRole.id = this.roles._value.length + 1;
    newRole.roleTitle = roleTitle;
    newRole.roleDescription = roleDescription;
    this.roles._value.push(newRole);

    const log = new Logs();
    log.id = this.logs._value.length + 1;
    log.username = this.user.value.username;
    log.log = "ADDED ROLE"+ JSON.stringify(newRole);
    let dateTime = new Date();
    log.dateAndTime = dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString();
    this.logs._value.push(log);
    localStorage.setItem('logs', JSON.stringify(this.logs._value));

    localStorage.setItem('roles', JSON.stringify(this.roles._value));
  }


}
