import { Injectable } from '@angular/core';
import {Permission, Skill} from '../../shared/models';
import {BehaviorSubject} from 'rxjs';
import {User} from "../../shared/models/user";
import {Logs} from "../../shared/models/logs";

@Injectable()
export class PermissionsDataService {
  permissions: any;
  logs: any;
  user: any;
  constructor() {
    this.permissions = new BehaviorSubject<Permission>(JSON.parse(localStorage.getItem('permissions')));
    this.logs = new BehaviorSubject<Logs>(JSON.parse(localStorage.getItem('logs')));
    this.user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

  }
  getData() {
    return this.permissions._value;
  }

  deleteItem(id) {
    for (let i = 0; i < this.permissions._value.length; i++) {
      let role = this.permissions._value[i];
      if (parseInt(this.permissions._value[i].id) === id) {
        // delete skill

        const log = new Logs();
        log.id = this.logs._value.length + 1;
        log.username = this.user.value.username;
        log.log = "DELETED PERMISSION"+ JSON.stringify(this.permissions._value[i]);
        let dateTime = new Date();
        log.dateAndTime = dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString();
        this.logs._value.push(log);
        localStorage.setItem('logs', JSON.stringify(this.logs._value));

        this.permissions._value.splice(i, 1);
        localStorage.setItem('permissions', JSON.stringify(this.permissions._value));
        break;
      }
    }
  }

  addItem(permissionTitle: string, permissionDescription: string) {
    const newPermission = new Permission();
    newPermission.id = this.permissions._value.length + 1;
    newPermission.permissionTitle = permissionTitle;
    newPermission.permissionDescription = permissionDescription;
    this.permissions._value.push(newPermission);

    const log = new Logs();
    log.id = this.logs._value.length + 1;
    log.username = this.user.value.username;
    log.log = "ADDED PERMISSION"+ JSON.stringify(newPermission);
    let dateTime = new Date();
    log.dateAndTime = dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString();
    this.logs._value.push(log);
    localStorage.setItem('logs', JSON.stringify(this.logs._value));

    localStorage.setItem('permissions', JSON.stringify(this.permissions._value));
  }


}
