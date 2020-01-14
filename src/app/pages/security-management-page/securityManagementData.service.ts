import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Role, SecurityManagement} from '../../shared/models';
import {Logs} from "../../shared/models/logs";
import {User} from '../../shared/models';

@Injectable()
export class SecurityManagementDataService {
  private securityManagement: BehaviorSubject<SecurityManagement>;

  roles: any;
  logs: any;
  user: any;
  userRole: any;

  constructor() {
    this.securityManagement = new BehaviorSubject<SecurityManagement>(JSON.parse(localStorage.getItem('securityManagement')));
    this.logs = new BehaviorSubject<Logs>(JSON.parse(localStorage.getItem('logs')));
    this.user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.userRole = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('userRole')));
    if(this.userRole._value == null)
      this.userRole._value = [];

  }

  filterDataTable(username: any) {
    //let filtered = this.skillsTableData._value;
    //return filtered.filter( el => el.userName === username );
  }

  addRoleToUser(user: string, roleId: number) {
    this.userRole = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('userRole')));
    const log = new Logs();
    log.id = this.logs._value.length + 1;
    log.username = this.user.value.username;
    log.log = "ASIGNED ROLE"+ JSON.stringify(roleId) + " TO USER " +  JSON.stringify(user);
    let dateTime = new Date();
    log.dateAndTime = dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString();
    this.logs._value.push(log);
    localStorage.setItem('logs', JSON.stringify(this.logs._value));

    this.userRole._value.push({user: user, roleId: roleId})
    localStorage.setItem('userRole', JSON.stringify(this.userRole._value));

    console.log(JSON.parse(localStorage.getItem('userRole')));
  }

  removeRoleFromUser(user: string, roleId: number) {
    this.userRole = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('userRole')));
    const log = new Logs();
    log.id = this.logs._value.length + 1;
    log.username = this.user.value.username;
    log.log = "REMOVED ROLE"+ JSON.stringify(roleId) + " TO USER " +  JSON.stringify(user);
    let dateTime = new Date();
    log.dateAndTime = dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString();
    this.logs._value.push(log);
    localStorage.setItem('logs', JSON.stringify(this.logs._value));

    for( var i = this.userRole._value.length; i--;){
      if ( this.userRole._value[i].user == user && this.userRole._value[i].roleId == roleId)
          this.userRole._value.splice(i, 1);
    
    }

    localStorage.setItem('userRole', JSON.stringify(this.userRole._value));
    console.log(JSON.parse(localStorage.getItem('userRole')));

  }

  getRolesByUser(user:string){
    let ids = [];
    this.userRole = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('userRole')));

    for( var i = this.userRole._value.length; i--;){
      if ( this.userRole._value[i].user == user)
        ids.push(this.userRole._value[i].roleId);    
    }
    return ids;
  }
}
